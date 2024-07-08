

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Resenaa } from './resena.component';

@Injectable()
export class ResenaServiceMock {
  private resenas: Resenaa[] = [
    { id: '1', usuario: 'mockuser', valoracion: 5, comentario: 'Mocked comment 1' },
    { id: '2', usuario: 'mockuser', valoracion: 4, comentario: 'Mocked comment 2' }
  ];

  getAllResenas(): Observable<Resenaa[]> {
    return of(this.resenas);
  }

  agregarResena(resena: Resenaa): Observable<Resenaa> {
    resena.id = (this.resenas.length + 1).toString(); 
    this.resenas.push(resena);
    return of(resena);
  }

  editarResena(id: string, resena: Resenaa): Observable<Resenaa> {
    const index = this.resenas.findIndex(r => r.id === id);
    if (index !== -1) {
      this.resenas[index] = { ...resena, id }; 
      return of(this.resenas[index]);
    }
    return of(null); 
  }

  eliminarResena(id: string): Observable<any> {
    const index = this.resenas.findIndex(r => r.id === id);
    if (index !== -1) {
      this.resenas.splice(index, 1);
      return of({ success: true });
    }
    return of({ success: false }); 
  }
}

