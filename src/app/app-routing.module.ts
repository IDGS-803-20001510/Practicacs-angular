import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ds2PuntosComponent } from './practica/modulos/ds2-puntos/ds2-puntos.component';
import { CinepolisComponent } from './practica/modulos/cinepolis/cinepolis.component';
import { ResistenciasComponent } from './practica/modulos/resistencias/resistencias.component';

const routes: Routes = [

  {path:'',redirectTo:'/home', pathMatch:'full'},
  {path:'D2D', component: Ds2PuntosComponent},
  {path:'Cinepolis', component: CinepolisComponent},
  {path:'Resistencias', component: ResistenciasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
