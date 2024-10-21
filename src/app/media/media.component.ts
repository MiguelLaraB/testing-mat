import { Component } from '@angular/core';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [],
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {

  column1 = [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503];
  column2 = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];

  calculateMean(values: number[]): number {
    const sum = values.reduce((a, b) => a + b, 0);
    return sum / values.length;
  }

  displayResults() {
    const mean1 = this.calculateMean(this.column1).toFixed(2); // 550.60
    const mean2 = this.calculateMean(this.column2).toFixed(2); // 60.32
    
    console.log(`Mean for column 1: ${mean1}`);
    console.log(`Mean for column 2: ${mean2}`);
  }  
}