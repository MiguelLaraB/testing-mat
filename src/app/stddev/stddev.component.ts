import { Component } from '@angular/core';
import { Stddev } from '../classes/stddev';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stddev',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stddev.component.html',
  styleUrl: './stddev.component.css'
})
export class StddevComponent {

  stddev: Stddev;
  inputData: string = '';
  resultado: number | null = null;
  errorMessage: string | null = null;

  constructor() {
    this.stddev = new Stddev();
  }

  calcularStddev(): void {
    // Convertir la entrada en un arreglo de números
    const dataArray = this.inputData.split(',').map(item => parseFloat(item.trim()));

    // Validar que el array contiene exactamente 10 elementos y todos son números válidos
    if (dataArray.length !== 10 || dataArray.some(isNaN)) {
      this.errorMessage = 'Por favor, ingresa exactamente 10 números válidos separados por comas.';
      this.resultado = null;
      return;
    }

    // Calcular la desviación estándar
    this.resultado = this.stddev.calcularStddev(dataArray);
    this.errorMessage = null;
  }

  getStddev(array: number[]): number {
    console.log(this.stddev.calcularStddev(array));
    return this.stddev.calcularStddev(array);
  }
}