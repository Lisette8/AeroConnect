import { Component, type OnInit } from "@angular/core"
import type { VolClass } from "../../Classes/vol-class"
import { CommonModule } from "@angular/common"


import { FormsModule } from "@angular/forms"
import { VolService } from "../../Services/vol-service"
import { Router, RouterLink } from "@angular/router"
import { AuthService } from "../../Services/auth-service"

@Component({
  selector: "app-vols",
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: "./vols.html",
  styleUrl: "./vols.css",
})
export class Vols implements OnInit {
  vols: VolClass[] = []
  filteredVols: VolClass[] = []
  searchTerm = ""

  constructor(
    private volService: VolService,
    private router: Router,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.getAllVols()
  }

  addVol() {
    this.router.navigate(["/vols-creation"])
  }

  deleteVol(id: number) {
    this.volService.deleteVol(id).subscribe((data) => {
      console.log(data)
      this.getAllVols()
    })
  }

  showVol(id: number) {
    this.router.navigate(["vols-details", id])
  }

  private getAllVols() {
    this.volService.getVols().subscribe((data) => {
      this.vols = data
      this.filteredVols = data
    })
  }

  updateVol(id: number) {
    this.router.navigate(["vols-update", id])
  }

  filterVols(): void {
    const term = this.searchTerm.toLowerCase().trim()
    if (!term) {
      this.filteredVols = this.vols
      return
    }
    this.filteredVols = this.vols.filter(
      (vol) =>
        vol.depart?.toLowerCase().includes(term) ||
        vol.arrive?.toLowerCase().includes(term) ||
        vol.compagnie?.toLowerCase().includes(term) ||
        vol.avion?.toLowerCase().includes(term) ||
        vol.dateDepart?.toLowerCase().includes(term),
    )
  }
}
