import { Injectable } from '@angular/core';
import { Person } from '../../models/person.model';

@Injectable({
    providedIn: 'root'
})
export class EmbaucheService {
    private embauchees: Person[] = [];

    constructor() { }

    getEmbauches(): Person[] {
        return this.embauchees;
    }

    embaucher(person: Person): void {
        const index = this.embauchees.findIndex(p => p.id === person.id);
        if (index < 0) {
            this.embauchees.push(person);
        } else {
            alert(`${person.name} est déjà pré sélectionné`);
        }
    }
}
