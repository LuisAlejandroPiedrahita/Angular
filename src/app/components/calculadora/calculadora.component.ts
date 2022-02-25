import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  @Input() conversion : number = 0;
  @Input() indice : number = 0;

}
