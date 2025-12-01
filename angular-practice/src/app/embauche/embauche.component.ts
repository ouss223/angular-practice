import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmbaucheService } from './services/embauche.service';
import { Person } from '../models/person.model';

@Component({
    selector: 'app-embauche',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './embauche.component.html',
    styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent {
    embaucheService = inject(EmbaucheService);
    embauchees: Person[] = this.embaucheService.getEmbauches();
}
