import { Component, Output, EventEmitter } from '@angular/core';
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
  @Output() personSelected = new EventEmitter<Person>();
  
  persons: Person[] = [
    new Person(1, 'john', 'rafi', 35, '12345678', 'Trainer', 'images/rafi.png'),
    new Person(2, 'Doe', 'John', 28, '87654321', 'Developer', 'images/john.png'),
    new Person(3, 'Smith', 'Jane', 32, '11223344', 'Designer', 'images/jane.png')
  ];

  selectPerson(person: Person) {
    this.personSelected.emit(person);
  }
}