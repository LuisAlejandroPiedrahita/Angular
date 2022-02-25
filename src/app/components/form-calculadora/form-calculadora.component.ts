import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-form-calculadora',
  templateUrl: './form-calculadora.component.html',
  styleUrls: ['./form-calculadora.component.css']
})
export class FormCalculadoraComponent{

  @Output() conversionCreado = new EventEmitter<number>();
  montoPesoColombiano:number = 0;

  convertir(){
    this.conversionCreado.emit(this.montoPesoColombiano / 3900);
  }

}
