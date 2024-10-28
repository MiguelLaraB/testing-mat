import { Component } from '@angular/core';

@Component({
  selector: 'app-petya-and-strings',
  standalone: true,
  imports: [],
  templateUrl: './petya-and-strings.component.html',
  styleUrl: './petya-and-strings.component.css'
})
export class PetyaAndStringsComponent {

  compareStrings(s1: string, s2: string): number {
    // Convertimos ambas cadenas a minúsculas
    const lowerS1 = s1.toLowerCase();
    const lowerS2 = s2.toLowerCase();
    
    // Comparación entre ambas cadenas
    if (lowerS1 > lowerS2) {
      return 1;
    } else if (lowerS1 < lowerS2) {
      return -1;
    } else {
      return 0;
    }
  }
}
