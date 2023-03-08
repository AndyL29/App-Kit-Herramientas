import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-universidad',
  templateUrl: './universidad.page.html',
  styleUrls: ['./universidad.page.scss'],
})
export class UniversidadPage implements OnInit {
  pais: string = "";
  universidades: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  buscarUniversidades() {
    const url = `http://universities.hipolabs.com/search?country=${this.pais}`;
    this.http.get(url).subscribe((data) => {
      this.universidades = data;
    });
  }

}
