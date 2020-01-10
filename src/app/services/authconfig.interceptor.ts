import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { UserService } from './user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private userService: UserService) {}
  intercept(req: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<string>> {
    const token = this.userService.getToken();
    const username = this.userService.getUserName();
    let authRequest: HttpRequest<string>;

    if (token && username) {
      authRequest = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`).set('Name', `${username}`),
      });
    } else {
      authRequest = req.clone({});
    }

    return next.handle(authRequest);
  }
}
