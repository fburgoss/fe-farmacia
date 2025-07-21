import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { MedicamentoService, Medicamento } from '../medicamento.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { MatTableDataSource } from '@angular/material/table';
import { ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule, FormsModule],

  
  templateUrl: './listado.html',
  styleUrls: ['./listado.css']
})
export class Listado implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['nombre', 'principio_activo', 'presentacion', 'laboratorio', 'precio', 'peso'];
  medicamentos = new MatTableDataSource<Medicamento>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private medicamentoService: MedicamentoService) { }

  ngOnInit(): void {
    this.medicamentoService.getMedicamentos().subscribe({
      next: (data) => {
        this.medicamentos.data = data;
      },
      error: (err) => {
        console.error('Error al obtener medicamentos', err);
      }
    });
  }

  ngAfterViewInit(): void {
    this.medicamentos.paginator = this.paginator;
    this.medicamentos.sort = this.sort;
  }


  mostrarFormulario = false;
  nuevoMedicamento: Medicamento = {
    id: '',
    nombre: '',
    principio_activo: '',
    presentacion: '',
    laboratorio: '',
    precio: 0,
    peso: ''
  };

  abrirFormulario() {
    this.mostrarFormulario = true;
  }

guardarMedicamento() {
  const { id, ...medicamentoSinId } = this.nuevoMedicamento;

  this.medicamentoService.agregarMedicamento(medicamentoSinId).subscribe({
    next: (data) => {
      console.log('Medicamento agregado:', data);
      this.mostrarFormulario = false;
      this.cargarMedicamentos();
      this.resetearFormulario();
    },
    error: (err) => console.error('Error al agregar', err)
  });
}

  cancelar() {
    this.mostrarFormulario = false;
  }


  cargarMedicamentos(): void {
  this.medicamentoService.getMedicamentos().subscribe({
    next: (data) => {
      this.medicamentos.data = data;
    },
    error: (err) => {
      console.error('Error al recargar medicamentos', err);
    }
  });
}

resetearFormulario() {
  this.nuevoMedicamento = {
    id: '',
    nombre: '',
    principio_activo: '',
    presentacion: '',
    laboratorio: '',
    precio: 0,
    peso: ''
  };
}



}
