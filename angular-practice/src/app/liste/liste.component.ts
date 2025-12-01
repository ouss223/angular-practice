import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [ItemComponent],
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent {
  @Input() persons: Person[] = [];
  @Output() personSelected = new EventEmitter<Person>();

  selectPerson(person: Person) {
    this.personSelected.emit(person);
  }
}