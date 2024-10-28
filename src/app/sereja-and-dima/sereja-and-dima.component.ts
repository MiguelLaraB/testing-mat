import { Component } from '@angular/core';

@Component({
  selector: 'app-sereja-and-dima',
  standalone: true,
  imports: [],
  templateUrl: './sereja-and-dima.component.html',
  styleUrl: './sereja-and-dima.component.css'
})
export class SerejaAndDimaComponent {

  result: { serena: number; dima: number } = { serena: 0, dima: 0 };

  calculatePoints(cards: number[]): { serena: number; dima: number } {
    let serena = 0;
    let dima = 0;
    let left = 0;
    let right = cards.length - 1;
    let turn = true; // true for Sereja's turn, false for Dima's turn

    while (left <= right) {
      if (cards[left] > cards[right]) {
        if (turn) {
          serena += cards[left];
        } else {
          dima += cards[left];
        }
        left++;
      } else {
        if (turn) {
          serena += cards[right];
        } else {
          dima += cards[right];
        }
        right--;
      }
      turn = !turn; // alternate turn
    }

    this.result = { serena, dima };
    return this.result;
  }
}
