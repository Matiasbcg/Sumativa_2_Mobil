import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-docinfo',
  templateUrl: './docinfo.page.html',
  styleUrls: ['./docinfo.page.scss'],
})
export class DocinfoPage implements OnInit {
  doctor: any;

  constructor(private route: ActivatedRoute, private doctorService: DoctorService) {}

  ngOnInit() {
    const doctorId = this.route.snapshot.paramMap.get('id');
    if (doctorId) {
      this.doctorService.getDoctorById(doctorId).subscribe(
        data => {
          this.doctor = data;
        },
        error => {
          console.error('Error al obtener los datos del doctor:', error);
        }
      );
    }
  }
}

