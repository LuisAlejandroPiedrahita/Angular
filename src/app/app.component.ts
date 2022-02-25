import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  deportes : string[] = ["Futbol","Baloncesto","Tenis"];
  conversiones: number[] = [];

  agregar(nombreDeporte : string){
    this.deportes.push(nombreDeporte);
  }

  agregarConversion(numeroConversion: number){
    this.conversiones.push(numeroConversion);
  }
}
