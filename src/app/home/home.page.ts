import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { DBTaskService } from '../services/dbtask.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  selectedSegment: string = 'experiencia';
  constructor(
    private router: Router, 
    private dbTaskService: DBTaskService
  ) {}

  async logout() {
    try {
      
      await this.dbTaskService.updateConnectionState(0);
      
      
      this.router.navigateByUrl('/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }
}


