import { Component, Input } from '@angular/core';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [], 
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() selectedPerson!: Person;
}