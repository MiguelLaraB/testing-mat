import { Component } from '@angular/core';
import { TStudent } from '../classes/t-student';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tstudent',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './t-student.component.html',
  styleUrl: './t-student.component.css',
})
export class TstudentComponent {
  t: TStudent
  dof = 0
  limiteInferior = 0
  limiteSuperior = 0
  numSegmentos = 0
  result: number | null = null

  constructor() {
    this.t = new TStudent();
  }

  calculateTStudent(dof: number, limiteInferior: number, limiteSuperior: number, numSegmentos: number) {
    this.result = this.getT(dof, limiteInferior, limiteSuperior, numSegmentos);
  }
  
  getT(dof: number, limiteInferior: number, limiteSuperior: number, numSegmentos: number) {
    this.result = this.t.tDistribution(dof, limiteInferior, limiteSuperior, numSegmentos);
    return parseFloat(this.result.toFixed(5));
  }
}