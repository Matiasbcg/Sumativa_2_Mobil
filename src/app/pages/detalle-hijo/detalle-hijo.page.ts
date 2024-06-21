import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DBTaskService } from '../../services/dbtask.service';

@Component({
  selector: 'app-detalle-hijo',
  templateUrl: './detalle-hijo.page.html',
  styleUrls: ['./detalle-hijo.page.scss'],
})
export class DetalleHijoPage implements OnInit {
  userDataList: any[] = [];

  constructor(private router: Router, private dbTaskService: DBTaskService) {}

  async ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state?.['userDataList']) {
      this.userDataList = navigation.extras.state['userDataList'];
    } else {
      try {
        const authenticatedUser = await this.dbTaskService.getAuthenticatedUser();
        const storedData = localStorage.getItem('userDataList');
        if (storedData) {
          const allUserData = JSON.parse(storedData);
          this.userDataList = allUserData.filter(userData => userData.hiddenField === authenticatedUser);
          if (this.userDataList.length === 0) {
            console.error('No se encontraron datos del hijo para el usuario autenticado');
            alert('No se encontraron datos del hijo para el usuario autenticado');
          }
        } else {
          console.error('No se encontraron datos del hijo en localStorage');
          alert('No se encontraron datos del hijo');
        }
      } catch (err) {
        console.error('Error al obtener usuario autenticado:', err);
        alert('Error al verificar los permisos');
      }
    }
  }
}




