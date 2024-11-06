import { Component } from '@angular/core';
import { Tstudent } from '../classes/t-student';

@Component({
  selector: 'app-t-student',
  standalone: true,
  imports: [],
  templateUrl: './t-student.component.html',
  styleUrl: './t-student.component.css',
})
export class TstudentComponent {
  t: Tstudent
  result: number = 0;

  constructor() {
    this.t = new Tstudent();
  }

  getT(dof: number, limiteInferior: number, limiteSuperior: number, numSegmentos: number) {
    return this.result = this.t.TDistribution(dof, limiteInferior, limiteSuperior, numSegmentos);
  }
}