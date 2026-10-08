import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Telephone, TelephonePayload } from '../models/telephone';

@Injectable({
  providedIn: 'root',
})
export class TelephoneService {
  private readonly apiUrl = 'https://localhost:7033/api/Telephone';

  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<Telephone[]> {
    return this.http.get<Telephone[]>(this.apiUrl);
  }

  getById(id: number): Observable<Telephone> {
    return this.http.get<Telephone>(`${this.apiUrl}/${id}`);
  }

  create(data: TelephonePayload): Observable<Telephone> {
    return this.http.post<Telephone>(this.apiUrl, data);
  }

  update(id: number, data: TelephonePayload): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
