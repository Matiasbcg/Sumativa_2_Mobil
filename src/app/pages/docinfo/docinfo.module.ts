import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocinfoPageRoutingModule } from './docinfo-routing.module';

import { DocinfoPage } from './docinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocinfoPageRoutingModule
  ],
  declarations: [DocinfoPage]
})
export class DocinfoPageModule {}
