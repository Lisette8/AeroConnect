import { CommonModule } from "@angular/common"
import { Component, type OnInit } from "@angular/core"
import type { ContactClass } from "../../Classes/contact-class"


import { FormsModule } from "@angular/forms"
import { ContactService } from "../../Services/contact-service"
import { Router, RouterLink } from "@angular/router"

@Component({
  selector: "app-feedback",
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: "./feedback.html",
  styleUrl: "./feedback.css",
})
export class Feedback implements OnInit {
  contacts: ContactClass[] = []
  filteredContacts: ContactClass[] = []
  searchTerm = ""

  constructor(
    private contactService: ContactService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getAllContacts()
  }

  private getAllContacts() {
    this.contactService.getContacts().subscribe((data) => {
      this.contacts = data
      this.filteredContacts = data
    })
  }

  filterContacts(): void {
    const term = this.searchTerm.toLowerCase().trim()
    if (!term) {
      this.filteredContacts = this.contacts
      return
    }
    this.filteredContacts = this.contacts.filter(
      (contact) =>
        contact.nom?.toLowerCase().includes(term) ||
        contact.prenom?.toLowerCase().includes(term) ||
        contact.email?.toLowerCase().includes(term) ||
        contact.telephone?.toLowerCase().includes(term) ||
        contact.message?.toLowerCase().includes(term),
    )
  }
}
