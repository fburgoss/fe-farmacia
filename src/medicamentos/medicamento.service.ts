import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Medicamento {
  id?: string;
  nombre: string;
  principio_activo: string;
  presentacion: string;
  laboratorio: string;
  precio: number;
  peso: string;
  destacado?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  private apiUrl = 'http://localhost:8080/medicamentos';

  constructor(private http: HttpClient) { }
// muestra los medicamnetos en la tabla componente listado
  getMedicamentos(): Observable<Medicamento[]> {
    return this.http.get<Medicamento[]>(this.apiUrl);
  }

// agrega medicamntos en la bd
  postMedicamento(medicamento: Medicamento): Observable<Medicamento> {
    return this.http.post<Medicamento>(this.apiUrl, medicamento);
  }


  //muestra los productos destaacados componente home
  getDestacados(): Observable<Medicamento[]> {
    return this.http.get<Medicamento[]>(`${this.apiUrl}/destacados`);
  }
}
