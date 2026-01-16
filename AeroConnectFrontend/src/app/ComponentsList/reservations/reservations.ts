import { Component, OnInit } from '@angular/core';
import { ReservationClass } from '../../Classes/reservation-class';
import { ReservationService } from '../../Services/reservation-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VolClass } from '../../Classes/vol-class';
import { VolService } from '../../Services/vol-service';

interface FlightFilters {
  depart: string;
  arrive: string;
  date: string;
  compagnie: string;
  prixMax: number | null;
}

@Component({
  selector: 'app-reservations',
  imports: [FormsModule, CommonModule],
  templateUrl: './reservations.html',
  styleUrl: './reservations.css',
})
export class Reservations implements OnInit {
  reservation: ReservationClass = new ReservationClass();
  vols: VolClass[] = [];
  filteredVols: VolClass[] = [];
  showToast: boolean = false;
  activeTab: 'flights' | 'custom' = 'flights';

  filters: FlightFilters = {
    depart: '',
    arrive: '',
    date: '',
    compagnie: '',
    prixMax: null
  };

  constructor(
    private reservationService: ReservationService,
    private router: Router,
    private volService: VolService
  ) {}

  ngOnInit(): void {
    this.getAllVols();
  }

  // Quick reserve - just shows toast, no database
  quickReserve(): void {
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }

  // Real submit - sends to database (only for custom tab)
  onSubmit(): void {
    this.reservationService.addReservation(this.reservation).subscribe(() => {
      this.reservationService.loadReservations();
      this.router.navigate(['/acceuil']);
    });
  }

  // Filter Methods
  applyFilters(): void {
    this.filteredVols = this.vols.filter(vol => {
      const matchDepart = !this.filters.depart || 
        vol.depart.toLowerCase().includes(this.filters.depart.toLowerCase());
      const matchArrive = !this.filters.arrive || 
        vol.arrive.toLowerCase().includes(this.filters.arrive.toLowerCase());
      const matchDate = !this.filters.date || 
        vol.dateDepart === this.filters.date;
      const matchCompagnie = !this.filters.compagnie || 
        vol.compagnie.toLowerCase().includes(this.filters.compagnie.toLowerCase());
      const matchPrix = !this.filters.prixMax || 
        vol.prix <= this.filters.prixMax;
      return matchDepart && matchArrive && matchDate && matchCompagnie && matchPrix;
    });
  }

  hasActiveFilters(): boolean {
    return !!(this.filters.depart || this.filters.arrive || this.filters.date || 
              this.filters.compagnie || this.filters.prixMax);
  }

  clearFilter(filterKey: keyof FlightFilters): void {
    if (filterKey === 'prixMax') {
      this.filters[filterKey] = null;
    } else {
      this.filters[filterKey] = '';
    }
    this.applyFilters();
  }

  resetFilters(): void {
    this.filters = {
      depart: '',
      arrive: '',
      date: '',
      compagnie: '',
      prixMax: null
    };
    this.filteredVols = [...this.vols];
  }

  private getAllVols(): void {
    this.volService.getVols().subscribe(data => {
      this.vols = data;
      this.filteredVols = [...data];
    });
  }
}