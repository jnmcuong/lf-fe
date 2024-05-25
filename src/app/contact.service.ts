import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  MOCK_DATA: Contact[] = [
    {
      id: 1,
      firstName: 'first name 1',
      lastName: 'last name 1',
      email: 'test.1@example.com'
    },
    {
      id: 2,
      firstName: 'first name 2',
      lastName: 'last name 2',
      email: 'test.2@example.com'
    },
    {
      id: 3,
      firstName: 'first name 3',
      lastName: 'last name 3',
      email: 'test.3@example.com'
    },
    {
      id: 4,
      firstName: 'first name 4',
      lastName: 'last name 4',
      email: 'test.4@example.com'
    },
  ];

  constructor() { }

  getContacts(): Observable<Contact[]> {
    const contacts = of(this.MOCK_DATA);
    return contacts;
  }
}
