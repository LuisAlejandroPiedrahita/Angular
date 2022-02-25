import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { DeporteComponent } from './components/deporte/deporte.component';
import { FormDeporteComponent } from './components/form-deporte/form-deporte.component';
import { FormCalculadoraComponent } from './components/form-calculadora/form-calculadora.component';
import { MenuComponent } from './components/menu/menu.component';
import {APP_ROUTING} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    EstudianteComponent,
    CalculadoraComponent,
    DirectivasComponent,
    DeporteComponent,
    FormDeporteComponent,
    FormCalculadoraComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
