import { Component, type OnInit } from "@angular/core"
import type { ReservationClass } from "../../Classes/reservation-class"

import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { ReservationService } from "../../Services/reservation-service"
import { Router, RouterLink } from "@angular/router"

@Component({
  selector: "app-reservation-list",
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: "./reservation-list.html",
  styleUrl: "./reservation-list.css",
})
export class ReservationList implements OnInit {
  reservations: ReservationClass[] = []
  filteredReservations: ReservationClass[] = []
  searchTerm = ""

  constructor(
    private reservationService: ReservationService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getAllReservations()
  }

  private getAllReservations() {
    this.reservationService.getReservations().subscribe((data) => {
      this.reservations = data
      this.filteredReservations = data
    })
  }

  filterReservations(): void {
    const term = this.searchTerm.toLowerCase().trim()
    if (!term) {
      this.filteredReservations = this.reservations
      return
    }
    this.filteredReservations = this.reservations.filter(
      (res) =>
        res.nom?.toLowerCase().includes(term) ||
        res.prenom?.toLowerCase().includes(term) ||
        res.email?.toLowerCase().includes(term) ||
        res.telephone?.toLowerCase().includes(term) ||
        res.adresse?.toLowerCase().includes(term) ||
        res.fromLocal?.toLowerCase().includes(term) ||
        res.toLocal?.toLowerCase().includes(term),
    )
  }
}
