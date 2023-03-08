import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeterminarEdadPage } from './determinar-edad.page';

const routes: Routes = [
  {
    path: '',
    component: DeterminarEdadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeterminarEdadPageRoutingModule {}
