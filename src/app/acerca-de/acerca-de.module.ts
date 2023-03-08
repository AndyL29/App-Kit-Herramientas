import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcercaDEPageRoutingModule } from './acerca-de-routing.module';

import { AcercaDEPage } from './acerca-de.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcercaDEPageRoutingModule
  ],
  declarations: [AcercaDEPage]
})
export class AcercaDEPageModule {}
