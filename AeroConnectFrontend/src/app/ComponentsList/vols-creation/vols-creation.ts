import { Component, OnInit } from '@angular/core';
import { VolClass } from '../../Classes/vol-class';
import { FormsModule } from '@angular/forms';
import { VolService } from '../../Services/vol-service';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-vols-creation',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './vols-creation.html',
  styleUrl: './vols-creation.css',
})
export class VolsCreation {

  vol: VolClass = new VolClass();

  constructor(
    private volService: VolService,
    private router: Router
  ) {}

  onSubmit() {
    this.volService.addVol(this.vol).subscribe(() => {
  
      this.volService.loadVols();
  
      this.router.navigate(['/vols']);
    });
  }
}

