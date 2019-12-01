import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserState } from 'src/app/models/states/user-state.model';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Intercepted request, sucker.');
    const newReq = req.clone({
      headers: req.headers.append('authorization', this.store.authorization)
    });
    console.log('interceptor, print newReq body and token');
    console.log(newReq.body);
    console.log(newReq.headers.get('authorization'));
    return next.handle(newReq);
  }
  constructor(public store: IUserState) {}
}
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
];
