import { Injectable } from '@angular/core';
import { ContactClass } from '../Classes/contact-class';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = "http://localhost:9000/AeroConnectBackend/contactApi/Contact";

  private contactSubject = new BehaviorSubject<ContactClass[]>([]);
      contact$ = this.contactSubject.asObservable();

      constructor(private http: HttpClient) {}

      loadContacts() {
        this.http.get<ContactClass[]>(this.apiUrl).subscribe(data => {
          this.contactSubject.next(data);
        });
      }

      getContacts(): Observable<ContactClass[]> {
        return this.http.get<ContactClass[]>(this.apiUrl);
      }

      addContact(vol: ContactClass): Observable<ContactClass> {
        return this.http.post<ContactClass>(this.apiUrl, vol);
      }
}
