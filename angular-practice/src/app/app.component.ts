import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CvComponent } from './cv/cv.component';


@Component({
  selector: 'app-root',
  //imports: [RouterOutlet, ],
  imports: [CvComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-practice';
}
