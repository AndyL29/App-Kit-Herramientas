import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClimaRDPage } from './clima-rd.page';

const routes: Routes = [
  {
    path: '',
    component: ClimaRDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClimaRDPageRoutingModule {}
