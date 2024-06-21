import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleHijoPageRoutingModule } from './detalle-hijo-routing.module';

import { DetalleHijoPage } from './detalle-hijo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleHijoPageRoutingModule
  ],
  declarations: [DetalleHijoPage]
})
export class DetalleHijoPageModule {}
