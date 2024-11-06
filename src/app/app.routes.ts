import { Routes } from '@angular/router';
import { MediaComponent } from './media/media.component';
import { CorrelationComponent } from './correlation/correlation.component';


export const routes: Routes = [
    { path: 'media', component: MediaComponent },
    { path: 'correlation', component: CorrelationComponent},
];
