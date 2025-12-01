import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [NgIf], 
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() selectedPerson!: Person;
}