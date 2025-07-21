import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Medicamento {
  id: string;
  nombre: string;
  principio_activo: string;
  presentacion: string;
  laboratorio: string;
  precio: number;
  peso: string;
}

@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  private apiUrl = 'http://localhost:8080/medicamentos';

  constructor(private http: HttpClient) {}

  getMedicamentos(): Observable<Medicamento[]> {
    return this.http.get<Medicamento[]>(this.apiUrl);
  }


  agregarMedicamento(medicamento: Medicamento): Observable<Medicamento> {
  return this.http.post<Medicamento>(this.apiUrl, medicamento);
}
}
