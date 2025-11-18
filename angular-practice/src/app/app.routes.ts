import { Routes } from '@angular/router';
import { ComponentTestComponent } from './component-test/component-test.component';
import {CarteVisiteComponent} from './carte-visite/carte-visite.component';
export const routes: Routes = [
  { path: 'carte-visite', component: CarteVisiteComponent },
  { path: 'component-test', component: ComponentTestComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];
