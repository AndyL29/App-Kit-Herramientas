import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClimaRDPageRoutingModule } from './clima-rd-routing.module';

import { ClimaRDPage } from './clima-rd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClimaRDPageRoutingModule
  ],
  declarations: [ClimaRDPage]
})
export class ClimaRDPageModule {}
