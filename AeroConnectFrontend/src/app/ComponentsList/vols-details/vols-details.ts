import { Component, OnInit } from '@angular/core';
import { VolClass } from '../../Classes/vol-class';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { VolService } from '../../Services/vol-service';

@Component({
  selector: 'app-vols-details',
  imports: [RouterLink],
  templateUrl: './vols-details.html',
  styleUrl: './vols-details.css',
})
export class VolsDetails implements OnInit{
  
  id!: number
  vol: VolClass = new VolClass();

  constructor(
    private route: ActivatedRoute,
    private volService: VolService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.volService.getVolById(this.id).subscribe(data => {
      this.vol = data;
    });
  }

}
