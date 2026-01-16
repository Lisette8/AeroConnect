import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VolClass } from '../../Classes/vol-class';
import { VolService } from '../../Services/vol-service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-vols-update',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './vols-update.html',
  styleUrl: './vols-update.css',
})
export class VolsUpdate implements OnInit {


  onSubmit() {
    this.volService.updateVol(this.id, this.vol).subscribe({
      next: () => this.navigateToVols(),
      error: err => console.error(err)
    });
  }

  navigateToVols(){
    this.router.navigate(['/vols']);
  }
  
  id!: number;
  vol: VolClass = new VolClass();

  constructor(
    private volService: VolService,
    private route: ActivatedRoute,
    private router: Router
  ){}
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.volService.getVolById(this.id).subscribe(data => {
      this.vol = data;
    }); 

  }

}
