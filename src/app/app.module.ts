import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { DirectivasComponent } from './components/directivas/directivas.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudianteComponent,
    CalculadoraComponent,
    DirectivasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
