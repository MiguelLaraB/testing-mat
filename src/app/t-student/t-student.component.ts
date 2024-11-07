import { Component } from '@angular/core';
<<<<<<< HEAD
import { TStudent } from '../classes/t-student';
=======
import { Tstudent } from '../classes/t-student';
>>>>>>> develop

@Component({
  selector: 'app-t-student',
  standalone: true,
  imports: [],
  templateUrl: './t-student.component.html',
<<<<<<< HEAD
  styleUrl: './t-student.component.css'
})
export class TStudentComponent {
  result: number;

  constructor() {
    const tStudent = new TStudent();
    this.result = tStudent.tDistribution(1.1, 9, 6, 0.0001); // Calculamos la distribución t para x=1.1 y dof=9
  }

}
=======
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
>>>>>>> develop
