import { Injectable } from '@angular/core';
import { Person } from '../../models/person.model';

@Injectable({
    providedIn: 'root'
})
export class CvService {
    private persons: Person[] = [
        new Person(1, 'john', 'rafi', 35, '12345678', 'Trainer', 'images/rafi.png'),
        new Person(2, 'Doe', 'John', 28, '87654321', 'Developer', 'images/john.png'),
        new Person(3, 'Smith', 'Jane', 32, '11223344', 'Designer', 'images/jane.png')
    ];

    constructor() { }

    getCvs(): Person[] {
        return this.persons;
    }
}
