import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'predecir-genero',
    loadChildren: () => import('./predecir-genero/predecir-genero.module').then( m => m.PredecirGeneroPageModule)
  },
  {
    path: 'determinar-edad',
    loadChildren: () => import('./determinar-edad/determinar-edad.module').then( m => m.DeterminarEdadPageModule)
  },
  {
    path: 'universidad',
    loadChildren: () => import('./universidad/universidad.module').then( m => m.UniversidadPageModule)
  },
  {
    path: 'clima-rd',
    loadChildren: () => import('./clima-rd/clima-rd.module').then( m => m.ClimaRDPageModule)
  },
  {
    path: 'acerca-de',
    loadChildren: () => import('./acerca-de/acerca-de.module').then( m => m.AcercaDEPageModule)
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
