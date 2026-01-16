  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { BehaviorSubject, Observable } from 'rxjs';
  import { VolClass } from '../Classes/vol-class';

  @Injectable({
    providedIn: 'root',
  })
  export class VolService {

    private apiUrl = "http://localhost:9000/AeroConnectBackend/volApi/Vols";

    private volsSubject = new BehaviorSubject<VolClass[]>([]);
    vols$ = this.volsSubject.asObservable();

    constructor(private http: HttpClient) {}
    
    loadVols() {
      this.http.get<VolClass[]>(this.apiUrl).subscribe(data => {
        this.volsSubject.next(data);
      });
    }
    
    getVols(): Observable<VolClass[]> {
      return this.http.get<VolClass[]>(this.apiUrl);
    }

    addVol(vol: VolClass): Observable<VolClass> {
      return this.http.post<VolClass>(this.apiUrl, vol);
    }

    getVolById(id: number): Observable<VolClass> {
      return this.http.get<VolClass>(`${this.apiUrl}/${id}`);
    }

    updateVol(id: number, vol: VolClass): Observable<VolClass> {
      return this.http.put<VolClass>(`${this.apiUrl}/${id}`, vol);
    }

    deleteVol(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    } 

    
  
  }
