import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  nombre!: string;
  cantidad!: number;
  cantidadB!: number;
  valorB: number = 12;
  persona!: number;
  resultado = "";
  resultado2!:number;
  nombre1 = this.nombre;

  opcionSelect: string = 'Si'

  opcion = [
    'Si',
    'No'
  ]

  ticket() {
    if (this.cantidad < 2) {
      this.persona = this.cantidad * 7
      switch (this.opcionSelect) {
        case 'Si':
          if (this.cantidadB > this.persona) {
            this.resultado = 'No se puede hacer el pago \n por que la cantidad excede de lo permitido el máximo de compra es: ' + this.persona;
          }
          else if (this.cantidadB > 5 && this.cantidadB <= this.persona){
            let pago = this.cantidadB * this.valorB;
            let des = pago * 0.15;
            let des2 = pago - des;
            let PRes = des2 * 0.10;
            this.resultado2= des2 - PRes;
          }
          else if (this.cantidadB > 2 && this.cantidadB <6){
            let pago = this.cantidadB * this.valorB;
            let des = pago * 0.10;
            let des2 = pago - des;
            let PRes = des2 * 0.10;
            this.resultado2 = des2 - PRes;
          }
          else if (this.cantidadB <= 2 ){
            let pago = this.cantidadB * this.valorB;
            let des = pago * 0.10;
            this.resultado2 = pago - des;
          }
          break;
        case 'No' :
          if (this.cantidadB > 5 && this.cantidadB < this.persona) {
            let pago = this.cantidadB * this.valorB;
            let des = pago * 0.15;
            this.resultado2= pago - des;
          }
          else if (this.cantidadB > 2 && this.cantidadB < 6){
            let pago = this.cantidadB * this.valorB;
            let des = pago * 0.10;
            this.resultado2 = pago - des;
          }
          else if (this.cantidadB <=2){
            this.resultado2 = this.cantidadB * this.valorB;
          }
          break;
      }
    }
    else if (this.cantidad >=2){
      this.persona = this.cantidad*7;
      switch (this.opcionSelect){
        case 'Si':
          if (this.cantidadB > this.persona) {
            this.resultado = 'No se puede hacer el pago \n por que la cantidad excede de lo permitido el máximo de compra es: ' + this.persona;
          }
          else if (this.cantidadB > 5 && this.cantidadB <= this.persona){
            let pago = this.cantidadB * this.valorB;
            let des = pago * 0.15;
            let des2 = pago - des;
            let PRes = des2 * 0.10;
            this.resultado2 = des2 - PRes;
          }
          else if (this.cantidadB > 2 && this.cantidadB <6){
            let pago = this.cantidadB * this.valorB;
            let des = pago * 0.10;
            let des2 = pago - des;
            let PRes = des2 * 0.10;
            this.resultado2 = des2 - PRes;
          }
          else if (this.cantidadB <= 2 ){
            let pago = this.cantidadB * this.valorB;
            let des = pago * 0.10;
            this.resultado2 = pago - des;
          }
          break;
        case 'No' :
          if (this.cantidadB > this.persona) {
            this.resultado = 'No se puede hacer el pago \n por que la cantidad excede de lo permitido el máximo de compra es: ' + this.persona;
          }
          else if (this.cantidadB > 5 && this.cantidad <=this.persona){
            let pago = this.cantidadB * this.valorB;
            let des = pago * 0.15;
            this.resultado2= pago - des;
          }
          else if (this.cantidadB > 2 && this.cantidad <6){
            let pago = this.cantidadB * this.valorB;
            let des = pago * 0.10;
            this.resultado2= pago - des;
          }
          else if (this.cantidadB <=2){
            this.resultado2 = this.cantidadB * this.valorB;
          }
          break;         
      }
    }
  }
  clear(){
    window.location.reload();
  }
}


