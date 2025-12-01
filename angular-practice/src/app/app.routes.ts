import { Routes } from '@angular/router';
import { ComponentTestComponent } from './component-test/component-test.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { TTCComponent } from './ttc/ttc.component';
import { CvComponent } from './cv/cv.component';
import { AuthComponent } from './auth/auth.component';
import { SlideshowComponent } from './slideshow/slideshow.component';


export const routes: Routes = [
  { path: 'carte-visite', component: CarteVisiteComponent },
  { path: 'test-component', component: ComponentTestComponent },
  { path: 'cv', component: CvComponent },
  { path: 'ttc', component: TTCComponent },
  { path: 'login', component: AuthComponent },
  { path: 'slideshow', component: SlideshowComponent },
  { path: '', redirectTo: '/carte-visite', pathMatch: 'full' },
];
