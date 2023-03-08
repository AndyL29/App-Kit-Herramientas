import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-predecir-genero',
  templateUrl: './predecir-genero.page.html',
  styleUrls: ['./predecir-genero.page.scss'],
})
export class PredecirGeneroPage implements OnInit {
  
  nombre: string = "";
  genero: string = "";
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  predecirGenero() {
    this.http.get(`https://api.genderize.io/?name=${this.nombre}`).subscribe((data: any) => {
      this.genero = data.gender;
    });
  }
}
