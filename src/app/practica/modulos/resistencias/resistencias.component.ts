import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {

  banda1!: string;
  banda2!: string;
  banda3!: string;
  banda4!: string;

  colbanda1!: string;
  colbanda2!: string;
  colbanda3!: string;
  coltolerancia!: string;
  toleranciaMinima!:number;
  toleranciaMaxima!:number;
  toleranciaPorcentaje!: number;

  resistencia!: string;

  banda1Select: string = 'black';
  banda2Select: string = 'black';
  banda3Select: string = 'black';
  toleranciaSelect: string = 'gold';
  colorEsp:string = "";

  selectColores = [
    'Negro',
    'Marrón',
    'Rojo',
    'Naranja',
    'Amarillo',
    'Verde',
    'Azul',
    'Violeta',
    'Gris',
    'Blanco'
];

  colores = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
  ];

  tolerancia = [
    'gold',
    'silver',
  ];

  calcularResistencias() {
    switch (this.banda1Select) {
      case 'black':
        this.banda1 = "0"; this.colbanda1 = "black"; break;
      case 'brown':
        this.banda1 = "1"; this.colbanda1 = "brown"; break;
      case 'red':
        this.banda1 = "2"; this.colbanda1 = "red"; break;
      case 'orange':
        this.banda1 = "3"; this.colbanda1 = "orange"; break;
      case 'yellow':
        this.banda1 = "4"; this.colbanda1 = "yellow"; break;
      case 'green':
        this.banda1 = "5"; this.colbanda1 = "green"; break;
      case 'blue':
        this.banda1 = "6"; this.colbanda1 = "blue"; break;
      case 'violet':
        this.banda1 = "7"; this.colbanda1 = "violet"; break;
      case 'grey':
        this.banda1 = "8"; this.colbanda1 = "grey"; break;
      case 'white':
        this.banda1 = "9"; this.colbanda1 = "white"; break;
    }

    switch (this.banda2Select) {
      case 'black':
        this.banda2 = "0"; this.colbanda2 = "black"; break;
      case 'brown':
        this.banda2 = "1"; this.colbanda2 = "brown"; break;
      case 'red':
        this.banda2 = "2"; this.colbanda2 = "red"; break;
      case 'orange':
        this.banda2 = "3"; this.colbanda2 = "orange"; break;
      case 'yellow':
        this.banda2 = "4"; this.colbanda2 = "yellow"; break;
      case 'green':
        this.banda2 = "5"; this.colbanda2 = "green"; break;
      case 'blue':
        this.banda2 = "6"; this.colbanda2 = "blue"; break;
      case 'violet':
        this.banda2 = "7"; this.colbanda2 = "violet"; break;
      case 'grey':
        this.banda2 = "8"; this.colbanda2 = "grey"; break;
      case 'white':
        this.banda2 = "9"; this.colbanda2 = "white"; break;
    }

    switch (this.banda3Select) {
      case 'black':
        this.banda3 = ""; this.colbanda3 = "black"; break;
      case 'brown':
        this.banda3 = "0"; this.colbanda3 = "brown"; break;
      case 'red':
        this.banda3 = "00"; this.colbanda3 = "red"; break;
      case 'orange':
        this.banda3 = "000"; this.colbanda3 = "orange"; break;
      case 'yellow':
        this.banda3 = "0000"; this.colbanda3 = "yellow"; break;
      case 'green':
        this.banda3 = "00000"; this.colbanda3 = "green"; break;
      case 'blue':
        this.banda3 = "000000"; this.colbanda3 = "blue"; break;
      case 'violet':
        this.banda3 = "0000000"; this.colbanda3 = "violet"; break;
      case 'grey':
        this.banda3 = "00000000"; this.colbanda3 = "grey"; break;
      case 'white':
        this.banda3 = "000000000"; this.colbanda3 = "white"; break;
    }

    this.resistencia = this.banda1 + this.banda2 + this.banda3;

    switch (this.toleranciaSelect) {
      case 'gold':
        this.banda4 = " con 5%";
        this.coltolerancia = "gold";
        break;
      case 'silver':
        this.banda4 = " con 10%";
        this.coltolerancia = "silver";
        break;
    }
    const valor = parseFloat(this.resistencia);

    if (this.toleranciaSelect === 'gold') {
      this.toleranciaPorcentaje = 5;
    } else {
      this.toleranciaPorcentaje = 10;
    }
    const toleranciaDecimal = this.toleranciaPorcentaje/100;
    this.toleranciaMinima = valor - (valor * toleranciaDecimal);
    this.toleranciaMaxima = valor + (valor * toleranciaDecimal);
  }
  clear(){
    window.location.reload();
  }

}
