import { Component } from '@angular/core';
import { SimpsonRule } from '../classes/simpson_rule';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simpson',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './simpson.component.html',
  styleUrls: ['./simpson.component.css'] // Cambié styleUrl por styleUrls
})
export class SimpsonComponent {
  result: number;
  userResult: number | null = null; // Stores result from user input calculation
  x0: number = 1; // Initial values for inputs
  x1: number = 4;
  numSeg: number = 6;
  error: number = 0.001;
  selectedFx: string = 'f2x';

  private simpsonRule: SimpsonRule = new SimpsonRule();

  constructor() {
    const simpsonRule = new SimpsonRule();
    this.result = simpsonRule.simpson(1, 4, 6, simpsonRule.f1_x, 0.001);
  }

  calcularSimpson(): void {
    // Asignar la función seleccionada
    let func;
    switch (this.selectedFx) {
      case 'f2x':
        func = this.simpsonRule.f2x;
        break;
      case 'fx2':
        func = this.simpsonRule.fx2;
        break;
      case 'f1_x':
        func = this.simpsonRule.f1_x;
        break;
      default:
        console.warn("Función no reconocida");
        return;
    }
    // Ejecutar el cálculo con la función seleccionada
    this.userResult = this.simpsonRule.simpson(this.x0, this.x1, this.numSeg, func, this.error);
  }
}
