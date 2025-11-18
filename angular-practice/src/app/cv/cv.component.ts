import { Component } from '@angular/core';
import { ListeComponent } from '../liste/liste.component';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [ListeComponent, DetailComponent],
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  selectedPerson: any;

  onPersonSelected(person: any) {
    this.selectedPerson = person;
  }
}