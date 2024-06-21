import { Component, OnInit, ElementRef  } from '@angular/core';
import { ResenaService, Resena } from '../services/reseña.service';
import { DBTaskService } from '../services/dbtask.service';

@Component({
  selector: 'app-resena',
  templateUrl: './resena.component.html',
  styleUrls: ['./resena.component.scss'],
})
export class ResenaComponent implements OnInit {
  resenas: Resena[] = [];
  nuevaResena: Resena = { id: '', usuario: '', valoracion: 0, comentario: '' };
  editandoResena: Resena | null = null;
  authenticatedUser: string | null = null;

  constructor(
    private elRef: ElementRef,
    private resenaService: ResenaService,
    private dbTaskService: DBTaskService
  ) {}

  async ngOnInit() {
    this.authenticatedUser = await this.dbTaskService.getAuthenticatedUser();
    if (this.authenticatedUser) {
      this.nuevaResena.usuario = this.authenticatedUser;
    }
    this.getResenas();
  }

  getResenas() {
    this.resenaService.getAllResenas().subscribe(
      (data: Resena[]) => {
        this.resenas = data;
      },
      error => {
        console.error('Error al obtener reseñas:', error);
      }
    );
  }

  agregarResena() {
    if (this.authenticatedUser) {
      this.nuevaResena.usuario = this.authenticatedUser;
  
      // Generar un id único si no se proporciona
      if (!this.nuevaResena.id) {
        this.nuevaResena.id = this.generateUniqueId(); // Función para generar un id único
      }
  
      this.resenaService.agregarResena(this.nuevaResena).subscribe(
        (resena: Resena) => {
          this.resenas.push(resena);
          this.nuevaResena = { id: '', usuario: this.authenticatedUser, valoracion: 0, comentario: '' };
        },
        error => {
          console.error('Error al agregar reseña:', error);
        }
      );
    }
  }
  
  generateUniqueId(): string {
    // Generar un id único basado en la fecha actual y algún otro criterio si es necesario
    return Date.now().toString();
  }

  editarResena(resena: Resena) {
    if (this.authenticatedUser === resena.usuario) {
      this.editandoResena = { ...resena };
      this.scrollToEditForm(); // Si deseas desplazarte automáticamente al formulario de edición
    } else {
      // Aquí puedes mostrar un mensaje de error o realizar alguna acción según tu lógica de usuario no autorizado
      console.log('No estás autorizado para editar esta reseña.');
    }
  }

  guardarResenaEditada() {
    if (this.editandoResena) {
      this.resenaService.editarResena(this.editandoResena.id, this.editandoResena).subscribe(
        (resena: Resena) => {
          const index = this.resenas.findIndex(r => r.id === resena.id);
          if (index !== -1) {
            this.resenas[index] = resena;
            this.editandoResena = null;
          }
        },
        error => {
          console.error('Error al editar reseña:', error);
        }
      );
    }
  }

  eliminarResena(id: string) {
    const resena = this.resenas.find(r => r.id === id);
    if (resena && this.authenticatedUser === resena.usuario) {
      this.resenaService.eliminarResena(id).subscribe(
        () => {
          this.resenas = this.resenas.filter(r => r.id !== id);
        },
        error => {
          console.error('Error al eliminar reseña:', error);
        }
      );
    } else {
      // Aquí puedes mostrar un mensaje de error o realizar alguna acción según tu lógica de usuario no autorizado
      console.log('No estás autorizado para eliminar esta reseña.');
    }
  }
  

  scrollToEditForm() {
    const editFormElement = this.elRef.nativeElement.querySelector('#editForm');
    if (editFormElement) {
      editFormElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}








