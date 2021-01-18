import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private localStorageKey: string = 'token';
  private subject = new BehaviorSubject<User | undefined>(undefined);

  constructor() {
    const tokenFromStorage = localStorage.getItem(this.localStorageKey);
    if (tokenFromStorage != null) {
      this.subject.next({
        token: tokenFromStorage
      });
    }
  }

  login(fragment: string): void {
    const params = new URLSearchParams(fragment);
    const token = params.get('access_token');

    if (token != null) {
      localStorage.setItem(this.localStorageKey, token);
    }
    
    this.subject.next({
      token: token || undefined
    });
  }

  logout(): void {
    localStorage.removeItem(this.localStorageKey);
    this.subject.next(undefined);
  }

  user$: Observable<User | undefined> = this.subject.asObservable();
}
