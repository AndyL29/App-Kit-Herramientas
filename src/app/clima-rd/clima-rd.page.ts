import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../clima.service';

@Component({
  selector: 'app-clima-rd',
  templateUrl: './clima-rd.page.html',
  styleUrls: ['./clima-rd.page.scss'],
})
export class ClimaRDPage implements OnInit {
  
  public weather: any;

  
  constructor(private climaService: ClimaService) { }

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.climaService.getWeather('Santo Domingo', 'DO').subscribe(
      (response) => {
        console.log(response);
        this.weather = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

}


