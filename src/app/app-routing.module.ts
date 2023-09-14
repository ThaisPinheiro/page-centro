import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageInicioComponent } from './pageInicio/pageInicio.component';
import { DirigentesComponent } from './dirigentes/dirigentes.component';
import { CalendarioComponent } from './calendario/calendario.component';

const routes: Routes = [
  { path: 'home', component: PageInicioComponent },
  { path: 'dirigentes', component: DirigentesComponent },
  { path: 'calendario', component: CalendarioComponent },
  // { path: 'item3', component: Item3Component },
  // { path: 'item4', component: Item4Component },
  // { path: 'item5', component: Item5Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
