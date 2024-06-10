import { Component } from '@angular/core';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.scss']
})
export class ExperienciaLaboralComponent {
  experiencia: any = {
    empresa: '',
    anoInicio: null,
    actualmenteTrabajando: false,
    anoTermino: null,
    cargo: ''
  };
  isCurrentlyWorking: boolean = false; // Agregar propiedad isCurrentlyWorking

  constructor() {}

  onCheckboxChange(event: any) {
    this.isCurrentlyWorking = event.detail.checked; // Actualizar isCurrentlyWorking cuando cambia el estado del checkbox
  }

  guardarExperiencia() {
    // Guardar la experiencia en el localStorage
    let experienciasGuardadas: any[] = JSON.parse(localStorage.getItem('experienciasLaborales') || '[]');
    experienciasGuardadas.push(this.experiencia);
    localStorage.setItem('experienciasLaborales', JSON.stringify(experienciasGuardadas));

    // Reiniciar la variable de experiencia para limpiar los campos
    this.experiencia = {
      empresa: '',
      anoInicio: null,
      actualmenteTrabajando: false,
      anoTermino: null,
      cargo: ''
    };

    // Reiniciar isCurrentlyWorking después de guardar la experiencia
    this.isCurrentlyWorking = false;
  }
}



