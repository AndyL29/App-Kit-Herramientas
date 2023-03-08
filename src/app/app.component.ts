import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Predecir Genero', url: 'predecir-genero', icon: 'transgender' },
    { title: 'Determinar edad', url: 'determinar-edad', icon: 'person' },
    { title: 'Universidad por país', url: 'universidad', icon: 'book' },
    { title: 'Clima en RD', url: 'clima-rd', icon: 'rainy' },
    { title: 'Acerca De', url: 'acerca-de', icon: 'information-circle' },
  
  ];
  constructor() {}
}
