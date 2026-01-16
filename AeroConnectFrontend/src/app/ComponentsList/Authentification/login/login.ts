import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../Services/auth-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit{

  password: string = '';
  showError: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
  }

  onLogin() {
    if (!this.password) return;

    this.authService.login(this.password).subscribe({
      next: (success) => {
        if (success) {
          this.showError = false;
          this.router.navigate(['/vols']);
        } else {
          this.showError = true;
        }
      },
      error: () => {
        this.showError = true;
      }
    });
  }
  

}
