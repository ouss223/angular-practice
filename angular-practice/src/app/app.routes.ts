import { Routes } from '@angular/router';
import { ComponentTestComponent } from './component-test/component-test.component';

export const routes: Routes = [ { path: 'component-test', component: ComponentTestComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }];
