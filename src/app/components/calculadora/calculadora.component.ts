import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  montoPesoColombiano: number = 0;
  conversion: number = 0;

  getConversion() {
    this.conversion = this.montoPesoColombiano / 3943.37;
  }

}
