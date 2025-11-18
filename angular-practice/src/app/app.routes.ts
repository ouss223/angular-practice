import { Routes } from '@angular/router';
import { ComponentTestComponent } from './component-test/component-test.component';
import {CarteVisiteComponent} from './carte-visite/carte-visite.component';
import { TTCComponent } from './ttc/ttc.component';

export const routes: Routes = [
  { path: 'carte-visite', component: CarteVisiteComponent },
  { path: 'component-test', component: ComponentTestComponent },
  { path: 'ttc', component: TTCComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];
