import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleHijoPage } from './detalle-hijo.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleHijoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleHijoPageRoutingModule {}
