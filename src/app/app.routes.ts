import { Routes } from '@angular/router';
import { MediaComponent } from './media/media.component';
import { CorrelationComponent } from './correlation/correlation.component';
import { LinearRegressionComponent } from './linear-regression/linear-regression.component';

export const routes: Routes = [
    { path: 'media', component: MediaComponent },
    { path: 'correlation', component: CorrelationComponent},
    { path: 'linear-regression', component: LinearRegressionComponent},
];
