import { Injectable } from '@angular/core';
import { ReservationClass } from '../Classes/reservation-class';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private apiUrl = "http://localhost:9000/AeroConnectBackend/reservationApi/Reservation";

  private reservationSubject = new BehaviorSubject<ReservationClass[]>([]);
      reservation$ = this.reservationSubject.asObservable();

      constructor(private http: HttpClient) {}

      loadReservations() {
        this.http.get<ReservationClass[]>(this.apiUrl).subscribe(data => {
          this.reservationSubject.next(data);
        });
      }

      getReservations(): Observable<ReservationClass[]> {
        return this.http.get<ReservationClass[]>(this.apiUrl);
      }

      addReservation(vol: ReservationClass): Observable<ReservationClass> {
        return this.http.post<ReservationClass>(this.apiUrl, vol);
      }
}
