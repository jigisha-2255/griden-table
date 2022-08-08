import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth token from the service.
    let authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUsImlkIjo1LCJpYXQiOjE2NDI0MjQwMjYsImV4cCI6MzI4NDg1MTY1Mn0.gFnkxBTT2WbS4zBvTwdgM27jTuv12C5I5HTAqkgRKwc';

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      setHeaders:{
        Authorization:'bearer '+authToken
      }
      // headers: req.headers.set('token', authToken)
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}