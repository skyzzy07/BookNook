import { Inject, Injectable } from '@angular/core';
import { baseUrl } from '../shared/baseurl';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livre } from 'src/mock-data';

@Injectable({
  providedIn: 'root',
})
export class LivreService {
  constructor(private http: HttpClient, @Inject(baseUrl) public baseUrl: any) {}
  getLivres(): Observable<Livre[]> {
    return this.http.get<Livre[]>(`${this.baseUrl}/books`);
  }
}
