import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-determinar-edad',
  templateUrl: './determinar-edad.page.html',
  styleUrls: ['./determinar-edad.page.scss'],
})
export class DeterminarEdadPage implements OnInit {
  nombre: string = "";
  edad: number = 0;
  imagen: string = "";
  mensaje: string = "";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    
  };

  calcularEdad() {
    this.http
      .get<any>(`https://api.agify.io/?name=${this.nombre}`)
      .subscribe((data) => {
        this.edad = data.age;
        if (this.edad < 30) {
          this.mensaje = 'Eres joven';
          this.imagen = 'https://static.vecteezy.com/system/resources/previews/002/612/955/non_2x/happy-characters-young-woman-with-man-friendship-excitement-cheerful-laughing-from-happiness-vector.jpg';
        } else if (this.edad > 30 && this.edad < 60) {
          this.mensaje = 'Eres adulto o adulta';
          this.imagen = 'https://img.freepik.com/vector-premium/pareja-hombre-mujer-adultos-parque_18591-61578.jpg?w=2000';
        } else {
          this.mensaje = 'Eres viejito o viejita';
          this.imagen = 'https://i.pinimg.com/736x/78/5b/54/785b54a87e6b04a291b52d0bb97d658e.jpg';
        }
      });
  }
}