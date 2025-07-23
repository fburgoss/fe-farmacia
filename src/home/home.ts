import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { Medicamento, MedicamentoService } from '../medicamentos/medicamento.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatCardModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  selectedIndex = 0;
  productos: Medicamento[] = [];

  constructor(private medicamentoService: MedicamentoService) { }

  ngOnInit(): void {
    setInterval(() => {
      this.selectedIndex = (this.selectedIndex + 1) % 3;
    }, 3000);

    this.medicamentoService.getDestacados().subscribe(data => {
      this.productos = data;
    });
  }
}