import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.scss']
})
export class MisDatosComponent implements OnInit {
  certificados: any[] = [];
  experiencias: any[] = [];

  constructor() { }

  ngOnInit() {
    
    const certificadosGuardados = JSON.parse(localStorage.getItem('certificados') || '[]');
    this.certificados = certificadosGuardados;

    
    const experienciasGuardadas = JSON.parse(localStorage.getItem('experienciasLaborales') || '[]');
    this.experiencias = experienciasGuardadas;
  }
}



