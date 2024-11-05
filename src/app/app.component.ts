import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

  title = 'unit-testing';

  currentMenu: string = 'main';
  inputValores: string = ''; // Campo para entrada de datos
  valores: (number | null)[] = new Array(10).fill(null); // Arreglo de valores
  resultadoMedia: number | null = null; // Resultado de la media
  resultadoStddev: number | null = null; // Resultado de desviación estándar

  mostrarMenu(menu: string) {
    this.currentMenu = menu;
  }

  calcular(): void {
    // Convierte la cadena de entrada en un array de números
    this.valores = this.inputValores.split(',').map(num => {
      const parsed = parseFloat(num.trim());
      return isNaN(parsed) ? null : parsed;
    });

    if (this.valores.length !== 10) {
      console.error('Por favor, ingresa exactamente 10 números.');
      return;
    }

    // Calcular media y desviación estándar
    this.calcularMedia();
    this.calcularStddev();
  }

  calcularMedia(): void {
    const total = this.valores.reduce((acc: number, val: number | null) => {
      return acc + (val ?? 0); // Usa el operador de coalescencia nula para manejar valores nulos
    }, 0); // Inicializa el acumulador en 0

    const count = this.valores.filter(val => val !== null).length;

    // Asegurarse de que el conteo no sea 0 para evitar división por cero
    this.resultadoMedia = count > 0 ? total / count : null;
    this.resultadoStddev = null; // Resetea el resultado de desviación estándar
    console.log('Media:', this.resultadoMedia);
}
  calcularStddev(): void {
    const media = this.resultadoMedia; // Usa el resultado de la media ya calculada
    if (media === null) return; // Si la media es null, no calcular la desviación estándar

    const variance = this.valores
      .map(val => (val !== null ? Math.pow(val - media, 2) : 0))
      .reduce((acc, val) => acc + val, 0) / this.valores.filter(val => val !== null).length;

    this.resultadoStddev = Math.sqrt(variance);
    console.log('Desviación Estándar:', this.resultadoStddev);
  }
}