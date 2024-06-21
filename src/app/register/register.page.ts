import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DBTaskService } from '../services/dbtask.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  username: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private alertController: AlertController,
    private dbTaskService: DBTaskService
  ) {}

  async ngOnInit() {
    try {
      await this.dbTaskService.init();
    } catch (error) {
      console.error('Error initializing database:', error);
      this.showAlert('Error', 'Error initializing database');
    }
  }

  async register() {
    if (this.username && this.password) {
      try {
        await this.dbTaskService.registerUser(this.username, this.password);
        this.router.navigateByUrl('/home');
      } catch (error) {
        console.error('Error registering user:', error);
        this.showAlert('Error', 'Error registering user');
      }
    } else {
      this.showAlert('Error', 'Please fill in all fields');
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





