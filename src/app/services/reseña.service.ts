// resena.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Resena {
  id: string;
  usuario: string;
  valoracion: number;
  comentario: string;
}

@Injectable({
  providedIn: 'root'
})
export class ResenaService {
  private apiUrl = 'http://localhost:3000/reseñas'; // Ajusta la URL según tu configuración

  constructor(private http: HttpClient) {}

  getResenasByUsuario(usuario: string): Observable<Resena[]> {
    return this.http.get<Resena[]>(`${this.apiUrl}?usuario=${usuario}`);
  }

  agregarResena(resena: Resena): Observable<Resena> {
    return this.http.post<Resena>(this.apiUrl, resena);
  }

  editarResena(id: string, resena: Resena): Observable<Resena> {
    return this.http.put<Resena>(`${this.apiUrl}/${id}`, resena);
  }
  
  eliminarResena(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
  getAllResenas(): Observable<Resena[]> {
    return this.http.get<Resena[]>(`${this.apiUrl}`);
  }
  
}



