import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

import { MisDatosComponent } from '../mis-datos/mis-datos.component';
import { InformacionComponent } from '../informacion/informacion.component';
import { ResenaComponent } from '../resena/resena.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    MisDatosComponent,
    InformacionComponent,
    ResenaComponent
  ]
})
export class HomePageModule {}
