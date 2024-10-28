import { Component } from '@angular/core';
import { TStudent } from '../classes/t-student';

@Component({
  selector: 'app-t-student',
  standalone: true,
  imports: [],
  templateUrl: './t-student.component.html',
  styleUrl: './t-student.component.css'
})
export class TStudentComponent {
  result: number;

  constructor() {
    const tStudent = new TStudent();
    this.result = tStudent.tDistribution(1.1, 9, 6, 0.0001); // Calculamos la distribución t para x=1.1 y dof=9
  }

}
