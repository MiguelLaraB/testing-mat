import { Component } from '@angular/core';

@Component({
  selector: 'app-black-square',
  standalone: true,
  imports: [],
  templateUrl: './black-square.component.html',
  styleUrl: './black-square.component.css'
})
export class BlackSquareComponent {
  totalCalories: number = 0;

  // Función para calcular el total de calorías
  calculateCalories(calories: number[], gameSequence: string): number {
    let total = 0;

    for (const char of gameSequence) {
      const stripIndex = parseInt(char) - 1; // Convierte el caracter a índice (0-3)
      if (stripIndex >= 0 && stripIndex < calories.length) {
        total += calories[stripIndex]; // Suma las calorías correspondientes
      }
    }

    this.totalCalories = total; // Actualiza el valor en la propiedad del componente
    return total;
  }
}
