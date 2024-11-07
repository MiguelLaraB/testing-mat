import { Routes } from '@angular/router';
import { MediaComponent } from './media/media.component';
import { CorrelationComponent } from './correlation/correlation.component';
import { LinearRegressionComponent } from './linear-regression/linear-regression.component';
import { StddevComponent } from './stddev/stddev.component';
import { SimpsonComponent } from './simpson/simpson.component';
import { TstudentComponent } from './t-student/t-student.component';

export const routes: Routes = [
    { path: 'media', component: MediaComponent },
    { path: 'correlation', component: CorrelationComponent},
    { path: 'linear-regression', component: LinearRegressionComponent},
    { path: 'stddev', component: StddevComponent},
    { path: 'simpson', component: SimpsonComponent},
    { path: 'tstudent', component: TstudentComponent},
];
