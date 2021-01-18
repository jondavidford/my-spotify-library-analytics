import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private token: string | undefined = undefined;

  constructor(private authService: AuthService) {
    authService.user$.subscribe(next => {
      this.token = next?.token;
    });
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const bearer = 'Bearer ' + this.token ?? '';
    const authReq = request.clone({
      headers: request.headers.set('Authorization', bearer)
    });

    return next.handle(authReq);
  }
}
