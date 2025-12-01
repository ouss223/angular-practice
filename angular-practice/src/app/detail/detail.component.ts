import { Component, Input, inject } from '@angular/core';
import { Person } from '../models/person.model';
import { EmbaucheService } from '../embauche/services/embauche.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() selectedPerson!: Person;
  private embaucheService = inject(EmbaucheService);

  embaucher() {
    if (this.selectedPerson) {
      this.embaucheService.embaucher(this.selectedPerson);
    }
  }
}