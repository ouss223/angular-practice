import { Injectable, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Person } from '../../models/person.model';

@Injectable({
    providedIn: 'root'
})
export class EmbaucheService {
    private embauchees: Person[] = [];

    private toastr = inject(ToastrService);

    constructor() { }

    getEmbauches(): Person[] {
        return this.embauchees;
    }

    embaucher(person: Person): void {
        const index = this.embauchees.findIndex(p => p.id === person.id);
        if (index < 0) {
            this.embauchees.push(person);
            this.toastr.success(`${person.name} a été embauché avec succès`);
        } else {
            this.toastr.warning(`${person.name} est déjà pré sélectionné`);
        }
    }
}
