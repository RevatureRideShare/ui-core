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
import { IAppState } from 'src/app/models/states/app-state.model';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  /**
   * Constructor used to inject IUserState
   */
  constructor(public store: Store<IAppState>) {
    console.log('interceptor is called');
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    
    this.store.select(store => store['allUsers'].authorization).subscribe(
      res => {
        console.log('interceptor print token');
        console.log(res);
        if (res) {
          const newReq = req.clone({
            headers: req.headers.append('Authorization', res)
          });
          return next.handle(newReq);
        }
        else {
          return next.handle(req);
        }
      }
    )
    
    return null;
  }
}
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
];
