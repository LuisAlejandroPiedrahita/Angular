import {RouterModule, Routes} from "@angular/router";
import {EstudianteComponent} from "./components/estudiante/estudiante.component";
import {CalculadoraComponent} from "./components/calculadora/calculadora.component";
import {DirectivasComponent} from "./components/directivas/directivas.component";

const APP_ROUTES: Routes = [
  { path: 'estudiante', component: EstudianteComponent },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'directivas', component: DirectivasComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'directivas' }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
