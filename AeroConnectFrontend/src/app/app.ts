import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Footer } from "./ComponentsList/footer/footer";
import { Header } from "./ComponentsList/header/header";
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AeroConnectFrontend');

  // This signal controls whether the Header and Footer are visible
  showLayout = signal(true);

  private router = inject(Router);
  private routerSubscription: any;

  ngOnInit() {
    // Subscribe to router events to detect when the page changes
    this.routerSubscription = this.router.events.pipe(
      // Only act when the navigation has finished
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const url = event.url;

      const excludedRoutes = [
        '/vols',
        '/reservation-list',
        '/feedback',
        '/utilisateur-list',
        '/statistiques',
      ];
      
      const isExcludedRoute = excludedRoutes.some(route =>
        url.startsWith(route)
      );

      this.showLayout.set(!isExcludedRoute);
    });
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
