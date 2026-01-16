import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:9000/AeroConnectBackend/administrateurApi';
  
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  login(password: string): Observable<boolean> {
    return this.http.post(`${this.apiUrl}/login`, { password }, { withCredentials: true } ).pipe(
      map(() => true),
    );
  }

  logout() {
    return this.http.post(`${this.apiUrl}/logout`, {}, { withCredentials: true } ).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

  isLoggedIn(): Observable<boolean> {
    return this.http.get(`${this.apiUrl}/check`, { withCredentials: true } ).pipe(
      map(() => true),
    );
 }

 
}
