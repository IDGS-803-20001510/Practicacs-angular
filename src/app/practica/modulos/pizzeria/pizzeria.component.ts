import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pizzeria',
  templateUrl: './pizzeria.component.html',
  styleUrls: ['./pizzeria.component.css'],
})
export class PizzeriaComponent {

  nombre!: string;
  direccion!: string;
  telefono!: string;
  fecha!: string;
  tamanoPizza!: string;
  numPizza!: number;
  pizzas: any[] = [];
  ventas: any[] = [];
  pizzasTerminadas: any[] = [];
  totalVentas: number = 0;

  costoIngredientes = 10;

  opcionSelect: string = 'Chica $40';

  opcion = [
    'Chica $40',
    'Mediana $80',
    'Grande $120'
  ];

  ingredientes: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.ingredientes = this.formBuilder.group({
      jamon: false,
      pina: false,
      champinones: false,
    });
  }

  anadirPizza() {
    const jamon = this.ingredientes.get('jamon')?.value;
    const pina = this.ingredientes.get('pina')?.value;
    const champinones = this.ingredientes.get('champinones')?.value;

    const ingredientesSeleccionados = { jamon, pina, champinones };

    const pizza = {
      nombre: this.nombre,
      direccion: this.direccion,
      telefono: this.telefono,
      tamano: this.opcionSelect,
      ingredientes: this.ingredientes.value,
      numPizza: this.numPizza,
      subtotal: this.subTotal(ingredientesSeleccionados),
      costoIngredientes: 0
    };

    this.pizzas.push(pizza);
  }

  quitarPizza(index: number) {
    this.pizzas.splice(index, 1);
  }

  getIngredientesSeleccionados(pizza: any): string[] {
    const ingredientesSeleccionados: string[] = [];

    if (pizza.ingredientes.jamon) {
      ingredientesSeleccionados.push('Jamón');
    }

    if (pizza.ingredientes.pina) {
      ingredientesSeleccionados.push('Piña');
    }

    if (pizza.ingredientes.champinones) {
      ingredientesSeleccionados.push('Champiñones');
    }

    return ingredientesSeleccionados;
  }

  subTotal(ingredientesSeleccionados: any) {
    let subtotal = 0;

    if (this.opcionSelect === 'Chica $40') {
      subtotal = (40 + this.calcularPrecioIngredientes(ingredientesSeleccionados)) * this.numPizza;
    } else if (this.opcionSelect === 'Mediana $80') {
      subtotal = (80 + this.calcularPrecioIngredientes(ingredientesSeleccionados)) * this.numPizza;
    } else if (this.opcionSelect === 'Grande $120') {
      subtotal = (120 + this.calcularPrecioIngredientes(ingredientesSeleccionados)) * this.numPizza;
    }

    return subtotal;
  }

  calcularPrecioIngredientes(ingredientesSeleccionados: any): number {
    let precioIngredientes = 0;

    if (ingredientesSeleccionados.jamon) {
      precioIngredientes += this.costoIngredientes;
    }

    if (ingredientesSeleccionados.pina) {
      precioIngredientes += this.costoIngredientes;
    }

    if (ingredientesSeleccionados.champinones) {
      precioIngredientes += this.costoIngredientes;
    }

    return precioIngredientes;
  }

  terminarVentas() {
    const confirmacion = window.confirm('¿Desea terminar el pedido?');
    if (confirmacion) {
      const confirmacionTotal = window.confirm(`El total del pedido es: $${this.totalVentas}. ¿Desea confirmar el pedido?`);
      if (confirmacionTotal) {
        for (let pizza of this.pizzas) {
          const nombreCliente = pizza.nombre;
          if (!this.ventas.some(venta => venta.nombre === nombreCliente)) {
            this.terminarVenta(pizza, nombreCliente);
          }
        }
        this.pizzasTerminadas.push(...this.pizzas);
        this.totalVentas += this.calcularTotalPizzas(this.pizzas);
        this.pizzas = [];
      }
    }
    this.nombre = "";
    this.direccion = "";
    this.telefono = "";
    this.opcionSelect = 'Chica $40';
    this.ingredientes.reset();
    this.numPizza = 0;
  }
  

  terminarVenta(pizza: any, nombreCliente: string) {
    const venta = {
      nombre: nombreCliente,
      total: pizza.subtotal
    };
    this.ventas.push(venta);
  }

  calcularTotalPizzas(pizzas: any[]): number {
    let total = 0;
    for (let pizza of pizzas) {
      total += pizza.subtotal;
    }
    return total;
  }

  quitarPizzaTerminada(index: number) {
    const pizzaTerminada = this.pizzasTerminadas[index];
    this.totalVentas -= pizzaTerminada.subtotal;
    this.pizzasTerminadas.splice(index, 1);
  }
}
