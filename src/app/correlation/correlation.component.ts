import { Component } from '@angular/core';
import { LinearRegression } from '../classes/linear_regression';
import { Correlation } from '../classes/correlation';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-correlation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './correlation.component.html',
  styleUrl: './correlation.component.css'
})
export class CorrelationComponent {

  

  linearRegression: LinearRegression;
  correlation: Correlation;
  inputArray1: string = '';
  inputArray2: string = '';
  r: number | null = null;
  rSquared: number | null = null;
  result: string | null=null;
  sumaXY = 0;
  sumaX = 0;
  sumaY = 0;
  sumaXX = 0;
  sumaYY = 0;
  n = 0;

  constructor() {
    this.linearRegression = new LinearRegression();
    this.correlation = new Correlation();
  }

  getDataOfLinearregression(array1: number[], array2: number[]) {
    this.sumaXY = this.linearRegression.sumXY(array1, array2);
    this.sumaX = this.linearRegression.sumXorY(array1);
    this.sumaY = this.linearRegression.sumXorY(array2);
    this.sumaXX = this.linearRegression.sumXXorYY(array1);
    this.sumaYY = this.linearRegression.sumXXorYY(array2);
    this.n = array1.length;
  }

  getRXY(array1: number[], array2: number[]) {
    let rxy = 0;
    this.getDataOfLinearregression(array1, array2);
    rxy = this.correlation.RXY(this.sumaXY, this.sumaX, this.sumaY, this.sumaXX, this.sumaYY, this.n);
    return parseFloat(rxy.toFixed(5));
  }

  getRR(array1: number[], array2: number[]) {
    let rr = 0;
    this.getDataOfLinearregression(array1, array2);
    rr = this.correlation.RR(this.sumaXY, this.sumaX, this.sumaY, this.sumaXX, this.sumaYY, this.n);
    return parseFloat(rr.toFixed(5));
  }

  calculate() {
    const array1 = this.inputArray1.split(',').map(num => parseFloat(num.trim()));
  const array2 = this.inputArray2.split(',').map(num => parseFloat(num.trim()));
 
  if (array1.length === array2.length && array1.length > 0) {
    this.r = this.getRXY(array1, array2);
    this.rSquared = this.getRR(array1, array2);
    this.result = `r = ${this.r}, r² = ${this.rSquared}`;  // Asignar el resultado a result
  } else {
    this.result = null;  // Restablecer el resultado en caso de error
    alert('Los arrays deben tener la misma longitud y no pueden estar vacíos.');
  }
}

}
