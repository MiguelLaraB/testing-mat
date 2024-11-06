import { Component } from '@angular/core';
import { SimpsonRule } from '../classes/simpson_rule';

@Component({
  selector: 'app-simpson',
  standalone: true,
  imports: [],
  templateUrl: './simpson.component.html',
  styleUrls: ['./simpson.component.css'] // Cambié styleUrl por styleUrls
})
export class SimpsonComponent {
  result: number;

  constructor() {
    const simpsonRule = new SimpsonRule();
    this.result = simpsonRule.simpson(1, 4, 6, simpsonRule.f1_x, 0.001);
  }
}
