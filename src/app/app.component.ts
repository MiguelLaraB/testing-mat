import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CorrelationComponent } from './correlation/correlation.component';
import { LinearRegressionComponent } from './linear-regression/linear-regression.component';
import { RouterLink } from '@angular/router';
import { MediaComponent } from './media/media.component';
import { StddevComponent } from './stddev/stddev.component';
import { SimpsonComponent } from './simpson/simpson.component';
import { TstudentComponent } from './t-student/t-student.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet,CommonModule, FormsModule, CorrelationComponent, LinearRegressionComponent
    , MediaComponent, StddevComponent, SimpsonComponent, TstudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

  title = 'unit-testing';

}