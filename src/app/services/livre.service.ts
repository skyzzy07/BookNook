import { Inject, Injectable } from '@angular/core';
import { baseUrl } from '../shared/baseurl';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livre } from 'src/mock-data';

@Injectable({
  providedIn: 'root',
})
export class LivreService {
  private apiUrl = baseUrl;
  constructor(private http: HttpClient) {}
  getLivres(): Observable<any> {
    return this.http.get(`${this.apiUrl}/books`);
  }
}
