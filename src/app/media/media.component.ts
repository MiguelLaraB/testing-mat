import { Component } from '@angular/core';
import { Media } from '../classes/media';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})
export class MediaComponent {

  media : Media;
  inputData: string = '';  // Para almacenar la entrada del usuario
  resultado: number | null = null;  // Resultado de la media
  errorMessage: string | null = null;

  constructor() {
    this.media = new Media();
  }

  getMedia(array: number[]): number {
    return this.media.calcularMedia(array);
  }

  displayResults() {
    console.log("Calculando medias..."); // Puedes añadir la lógica de cálculo aquí o simplemente este mensaje.
  }

  calcularMedia(): void {
    // Convertir la entrada en un arreglo de números
    const dataArray = this.inputData.split(',').map(item => parseFloat(item.trim()));

    // Validar que el array contiene exactamente 10 elementos y todos son números válidos
    if (dataArray.length !== 10 || dataArray.some(isNaN)) {
      this.errorMessage = 'Por favor, ingresa exactamente 10 números válidos separados por comas.';
      this.resultado = null;
      return;
    }

    // Calcular la media
    this.resultado = this.media.calcularMedia(dataArray);
    this.errorMessage = null;  // Limpiar el mensaje de error si todo es válido
  }
}