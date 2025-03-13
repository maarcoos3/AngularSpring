import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipo } from '../models/equipo';

@Injectable({
  providedIn: 'root'
})
// URL base que coincide con los endpoints del back-end (/api/equipos)
export class EquipoService {
  private apiUrl = 'http://localhost:8080/api/equipos'; 

  // inyectar el servicio HttpClient para realizar peticiones HTTP
  constructor(private http: HttpClient) {}

  getEquipos(): Observable<Equipo[]> {
    return this.http.get<Equipo[]>(this.apiUrl);
  }

  getEquipo(id: number): Observable<Equipo> {
    return this.http.get<Equipo>(`${this.apiUrl}/${id}`);
  }

  createEquipo(equipo: Equipo): Observable<Equipo> {
    return this.http.post<Equipo>(this.apiUrl, equipo);
  }

  updateEquipo(id: number, equipo: Equipo): Observable<Equipo> {
    return this.http.put<Equipo>(`${this.apiUrl}/${id}`, equipo);
  }

  deleteEquipo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
