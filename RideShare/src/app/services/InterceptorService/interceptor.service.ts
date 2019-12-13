import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { flatMap, first } from 'rxjs/internal/operators';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/models/states/app-state.model';

/**
 * Services related to interceptor to attach authorization token to requests
 */
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  /**
   * Constructor used to inject IUserState
   */
  constructor(public store: Store<IAppState>) {}

  /**
   * Take original request, attach authorization token to it and send new request
   * @param req The original request
   * @param next The object that used to handle/send new request
   */
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.store
      .select(store => store['allUsers'].authorization)
      .pipe(
        first(),
        flatMap(authToken => {
          console.log('interceptor print token');
          console.log(authToken);

          if (authToken) {
            const newReq = req.clone({
              headers: req.headers.append('Authorization', authToken)
            });
            return next.handle(newReq);
          } else {
            return next.handle(req);
          }
        })
      );
  }

  async getAuthorizationToken(): Promise<string> {
    console.log('In getAuthorizationToken');
    return await this.store
      .select(store => store['allUsers'].authorization)
      .toPromise();
  }
}

/**
 * Configuration of http interceptor
 */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
];
