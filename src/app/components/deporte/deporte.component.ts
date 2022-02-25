import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-deporte',
  templateUrl: './deporte.component.html',
  styleUrls: ['./deporte.component.css']
})
export class DeporteComponent {

  @Input() deporte : string = '';
  @Input() indice : number = 0;

}
