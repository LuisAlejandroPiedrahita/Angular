import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {

  mostrarNgIf: boolean = false;
  mostrarNgFor: boolean = false;

  colores: any[] = ["Negro","Blanco","Rojo","Amarillo"];

  cambiarNgIf(){
    this.mostrarNgIf = !this.mostrarNgIf;
  }

  cambiarNgFor(){
    this.mostrarNgFor = !this.mostrarNgFor;
  }
}
