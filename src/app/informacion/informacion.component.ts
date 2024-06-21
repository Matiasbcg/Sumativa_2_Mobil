import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.scss'],
})
export class InformacionComponent implements OnInit {
  doctores: any[] = [];

  constructor(private doctorService: DoctorService, private router: Router) {}

  ngOnInit() {
    this.doctorService.getDoctores().subscribe(
      data => {
        this.doctores = data;
      },
      error => {
        console.error('Error al obtener los datos de los doctores:', error);
      }
    );
  }

  verDetalle(doctorId: string) {
    this.router.navigateByUrl(`/docinfo/${doctorId}`);
  }
}







