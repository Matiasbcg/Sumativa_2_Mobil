import { Component } from '@angular/core';

@Component({
  selector: 'app-certificaciones',
  templateUrl: './certificaciones.component.html',
  styleUrls: ['./certificaciones.component.scss']
})
export class CertificacionesComponent {
  certificado: any = {
    nombre: '',
    fechaObtencion: '',
    conVencimiento: false,
    fechaVencimiento: ''
  };

  constructor() {}

  onCheckboxChange(event: any) {
    this.certificado.conVencimiento = event.detail.checked;
  }

  guardarDatos() {
    // Obtener certificados almacenados del localStorage
    let certificadosGuardados = JSON.parse(localStorage.getItem('certificados') || '[]');
    // Agregar el nuevo certificado
    certificadosGuardados.push(this.certificado);
    // Guardar los certificados en el localStorage
    localStorage.setItem('certificados', JSON.stringify(certificadosGuardados));
    // Limpiar los inputs
    this.limpiarInputs();
  }

  limpiarInputs() {
    this.certificado = {
      nombre: '',
      fechaObtencion: '',
      conVencimiento: false,
      fechaVencimiento: ''
    };
  }
}







