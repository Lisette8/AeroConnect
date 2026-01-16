import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ContactClass } from '../../Classes/contact-class';
import { ContactService } from '../../Services/contact-service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule,CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact{
  contact: ContactClass = new ContactClass();

  constructor(
    private contactService: ContactService,
    private router: Router
  ) {}

  onSubmit() {
    this.contactService.addContact(this.contact).subscribe(() => {
  
      this.contactService.loadContacts();
  
      this.router.navigate(['/acceuil']);
    });
  }

}
