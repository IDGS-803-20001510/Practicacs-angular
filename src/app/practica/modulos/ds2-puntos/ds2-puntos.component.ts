import { Component } from '@angular/core';

@Component({
  selector: 'app-ds2-puntos',
  templateUrl: './ds2-puntos.component.html',
  styleUrls: ['./ds2-puntos.component.css']
})
export class Ds2PuntosComponent {
puntox1!:number;
puntox2!:number;
puntoy1!:number;
puntoy2!:number;
resultado!:number;

calcular(){
   let distancia = Math.pow(this.puntox2 - this.puntox1, 2) + Math.pow(this.puntoy2 - this.puntoy1, 2)
   this.resultado = Math.sqrt(distancia);
}
}
