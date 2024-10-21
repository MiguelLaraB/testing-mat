import { Component } from '@angular/core';

@Component({
  selector: 'app-stddev',
  standalone: true,
  imports: [],
  templateUrl: './stddev.component.html',
  styleUrl: './stddev.component.css'
})
export class StddevComponent {

<<<<<<< HEAD
  calculateStdDev(data: number[]): number {
    const mean = this.calculateMean(data);
    const variance = data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / data.length;
    return Math.sqrt(variance);
  }

  calculateMean(data: number[]): number {
    const sum = data.reduce((acc, val) => acc + val, 0);
    return sum / data.length;
  }
=======

>>>>>>> 3bdeefb1b3563c3c490a8fefe952a85296ba8862
}
