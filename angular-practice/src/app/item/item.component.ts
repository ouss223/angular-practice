import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [NgIf], 
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() cv: any;
  @Output() selected = new EventEmitter<void>();

  selectItem() {
    this.selected.emit();
  }
}