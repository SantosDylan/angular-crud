import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CrudInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = JSON.parse(localStorage['loggedInUser']).accessToken;
    if (token) {
      return next.handle(req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }));
    } else return next.handle(req);
  }
}
