import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private subject = new BehaviorSubject<User>({});

  constructor() {
    const tokenFromStorage = localStorage.getItem('token');
    if (tokenFromStorage != null) {
      this.subject.next({
        token: tokenFromStorage
      });
    }
  }

  login(fragment: string): any {
    const params = new URLSearchParams(fragment);
    const token = params.get('access_token');
    
    if (token != null) {
      localStorage.setItem('token', token);
    }
    
    this.subject.next({
      token: token || undefined
    });
  }

  user$: Observable<User> = this.subject.asObservable();
}
