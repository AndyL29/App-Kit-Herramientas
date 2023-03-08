import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcercaDEPage } from './acerca-de.page';

const routes: Routes = [
  {
    path: '',
    component: AcercaDEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcercaDEPageRoutingModule {}
