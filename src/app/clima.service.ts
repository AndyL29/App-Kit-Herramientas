import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  
  apiKey = '4539d0027a51d2cdbc1975386ab1bff0';

  constructor(private http: HttpClient) {
    
   }

   getWeather(city: string, countryCode: string): Observable<any> {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${this.apiKey}`;
    return this.http.get(apiUrl);
  }

}
