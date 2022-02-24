import { Component } from '@angular/core';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent {

  nombres: string = "Mauricio";
  private profesion: string = "Ing. de Sistemas";
  edad:number = 40;
  direccion: string = "Cali - Valle";

  estudiante = {
    nombre : "Carlos",
    email : "carlos@eam.edu.co"
  }

  activar = false;

  getProfesion():string {
    return this.profesion;
  }

  agregar(){
    alert("Estudiante registrado");
  }
}
