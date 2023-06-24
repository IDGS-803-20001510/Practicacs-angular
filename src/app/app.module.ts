import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { D2PuntosModule } from './practica/modulos/d2-puntos/d2-puntos.module';
import { McinepolisModule } from './practica/modulos/mcinepolis/mcinepolis.module';
import { MresistenciasModule } from './practica/modulos/mresistencias/mresistencias.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    D2PuntosModule,
    McinepolisModule,
    MresistenciasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
