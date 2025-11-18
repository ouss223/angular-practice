import { Component,signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component-test',
  imports: [FormsModule],
  templateUrl: './component-test.component.html',
  styleUrl: './component-test.component.css'
})
export class ComponentTestComponent {
  color = signal('red');

}
