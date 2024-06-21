import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DBTaskService } from '../services/dbtask.service';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.component.html',
  styleUrls: ['./mis-datos.component.scss']
})
export class MisDatosComponent implements OnInit {
  user = {
    firstName: '',
    secondName: '',
    firstSurname: '',
    secondSurname: '',
    birthDate: '',
    school: '',
    hiddenField: '',
    photo: ''
  };
  photo: string | null = null;

  constructor(
    private router: Router,
    private dbTaskService: DBTaskService
  ) {}

  ngOnInit(): void {}

  async takePhoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera
      });
      this.photo = image.dataUrl;
    } catch (error) {
      console.error('User cancelled photos app', error);
    }
  }

  async onSubmit() {
    try {
      const authenticatedUser = await this.dbTaskService.getAuthenticatedUser();
      if (authenticatedUser) {
        this.user.hiddenField = authenticatedUser;
        const userData = { ...this.user, photo: this.photo };

        let userDataList = JSON.parse(localStorage.getItem('userDataList')) || [];
        userDataList.push(userData);

        localStorage.setItem('userDataList', JSON.stringify(userDataList));

        alert('Datos guardados con éxito');
        this.resetForm();
      } else {
        console.error('No hay usuario autenticado');
        alert('Error al guardar datos');
      }
    } catch (err) {
      console.error('Error al obtener usuario autenticado:', err);
      alert('Error al guardar datos');
    }
  }

  resetForm() {
    this.user = {
      firstName: '',
      secondName: '',
      firstSurname: '',
      secondSurname: '',
      birthDate: '',
      school: '',
      hiddenField: '',
      photo: ''
    };
    this.photo = null;
  }

  async verDetalleHijo() {
    try {
      const authenticatedUser = await this.dbTaskService.getAuthenticatedUser();
      const userDataList = JSON.parse(localStorage.getItem('userDataList'));
      if (userDataList) {
        const filteredData = userDataList.filter(userData => userData.hiddenField === authenticatedUser);
        if (filteredData.length > 0) {
          this.router.navigate(['/detalle-hijo'], { state: { userDataList: filteredData } });
        } else {
          console.error('No se encontraron datos del hijo para el usuario autenticado');
          alert('No se encontraron datos del hijo para el usuario autenticado');
        }
      } else {
        console.error('No se encontraron datos del hijo');
        alert('No se encontraron datos del hijo');
      }
    } catch (err) {
      console.error('Error al obtener usuario autenticado:', err);
      alert('Error al verificar los permisos');
    }
  }
}











