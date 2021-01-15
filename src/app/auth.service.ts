import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private subject = new BehaviorSubject<User>({});

  constructor() { }

  login(fragment: string): any {
    const params = new URLSearchParams(fragment);
    this.subject.next({
      token: params.get('access_token') || undefined
    });
  }

  user$: Observable<User> = this.subject.asObservable();
}
