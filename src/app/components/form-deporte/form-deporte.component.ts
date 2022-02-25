import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-form-deporte',
  templateUrl: './form-deporte.component.html',
  styleUrls: ['./form-deporte.component.css']
})
export class FormDeporteComponent {

  @Output() deporteCreado = new EventEmitter<string>();
  nombreDeporte:string ="";

  agregar(){
    this.deporteCreado.emit(this.nombreDeporte);
  }

}
