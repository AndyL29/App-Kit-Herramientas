import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeterminarEdadPageRoutingModule } from './determinar-edad-routing.module';

import { DeterminarEdadPage } from './determinar-edad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeterminarEdadPageRoutingModule
  ],
  declarations: [DeterminarEdadPage]
})
export class DeterminarEdadPageModule {}
