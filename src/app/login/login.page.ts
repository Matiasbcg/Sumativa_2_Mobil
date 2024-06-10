import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DBTaskService } from '../services/dbtask.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private dbTaskService: DBTaskService 
  ) {}

  async login() {
    try {
      const isUserValid = await this.dbTaskService.loginUser(this.username, this.password); 
      if (isUserValid) {
        this.router.navigateByUrl('/home');
      } else {
        this.showAlert('Error', 'Usuario o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      this.showAlert('Error', 'Ocurrió un error al iniciar sesión');
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}



