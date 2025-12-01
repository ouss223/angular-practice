import { Component, inject } from '@angular/core';
import { ListeComponent } from '../liste/liste.component';
import { DetailComponent } from '../detail/detail.component';
import { EmbaucheComponent } from '../embauche/embauche.component';
import { Person } from '../models/person.model';
import { CvService } from './services/cv.service';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [ListeComponent, DetailComponent, EmbaucheComponent],
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  private cvService = inject(CvService);
  persons: Person[] = [];
  selectedPerson!: Person;

  constructor() {
    this.persons = this.cvService.getCvs();
  }

  onPersonSelected(person: Person) {
    this.selectedPerson = person;
  }
}