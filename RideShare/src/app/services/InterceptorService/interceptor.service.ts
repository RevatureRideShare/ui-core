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
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  /**
   * Constructor used to inject IUserState
   */
  constructor(public store: Store<IUserState>) {
    console.log('interceptor is called');
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    
    // retrieve token from store
    let authToken: string;
    this.store
      .select(store => store.authorization)
      .subscribe(token => {
        console.log(token);
      });
    // console.log('interceptor service: print token.');
    // console.log(authToken);
    let newReq = null;
    if (authToken) {
      newReq = req.clone({
        headers: req.headers.append('Authorization', authToken)
      });
    
    console.log('interceptor, print newReq body and token');
    console.log(newReq.body);
    console.log(newReq.headers);
    return next.handle(newReq);
    }
    else {
      return next.handle(req);
    }
  }
}
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
];
