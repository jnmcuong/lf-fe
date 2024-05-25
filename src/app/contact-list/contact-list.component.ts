import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {MatDialog} from '@angular/material/dialog'; 

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [ContactComponent, CommonModule, FormsModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {

  contacts: Contact[] = [];
  searchText: string = "";

  constructor(private contactService: ContactService, public dialog: MatDialog) {}

  // dialogRef: MatDia
  
  ngOnInit(): void {
    this.contactService.getContacts().subscribe(contacts => this.contacts = contacts);
  }

  search(): void {
    this.contactService.getContacts().subscribe(contacts => 
      this.contacts = contacts.filter(c => c.firstName.includes(this.searchText) || c.lastName.includes(this.searchText) || c.email.includes(this.searchText))
    );
  }

  onSelect(contact: Contact): void {
    const dialogRef = this.dialog.open(ContactComponent, {data: contact})
  }
}
