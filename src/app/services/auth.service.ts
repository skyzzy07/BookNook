import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn = new BehaviorSubject<boolean>(true);
  private _isAdmin = new BehaviorSubject<boolean>(true);

  get isAdmin(): Observable<boolean> {
    return this._isAdmin.asObservable();
  }

  get isLoggedIn(): Observable<boolean> {
    return this._isLoggedIn.asObservable();
  }

  constructor() {}

  login() {
    this._isLoggedIn.next(true);
  }

  logout() {
    this._isLoggedIn.next(false);
  }
}
