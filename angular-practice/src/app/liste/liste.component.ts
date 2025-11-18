import { Component, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [NgFor, ItemComponent],
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent {
  @Output() personSelected = new EventEmitter<any>();
  
  persons = [
    {
      id: 1,
      name: 'john',
      firstname: 'rafi',
      age: 35,
      cin: '12345678',
      job: 'Trainer',
      path: 'images/rafi.png'
    },
    {
      id: 2,
      name: 'Doe',
      firstname: 'John',
      age: 28,
      cin: '87654321',
      job: 'Developer',
      path: 'images/john.png'
    },
    {
      id: 3,
      name: 'Smith',
      firstname: 'Jane',
      age: 32,
      cin: '11223344',
      job: 'Designer',
      path: 'images/jane.png'
    }
  ];

  selectPerson(person: any) {
    this.personSelected.emit(person);
  }
}