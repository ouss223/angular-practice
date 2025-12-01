import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [], 
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() cv!: Person;
  @Output() selected = new EventEmitter<Person>();

  selectItem() {
    this.selected.emit(this.cv);
  }
}