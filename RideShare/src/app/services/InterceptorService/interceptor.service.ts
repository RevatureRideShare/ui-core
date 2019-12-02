import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators';
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
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // this.getAuthorizationToken().then(res => {
    //   authToken = res;
    // });

    return this.store
      .select(store => store['allUsers'].authorization)
      .pipe(switchMap(authToken => {
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
      }
      )
      )
        
        ;

    /*this.store
      .select(store => store['allUsers'].authorization)
      .toPromise()
      .then(res => {
        console.log('interceptor print res');
        console.log(res);
        authToken = res;
      });
    console.log('interceptor print token');
    console.log(authToken);

    if (authToken) {
      const newReq = req.clone({
        headers: req.headers.append('Authorization', authToken)
      });
      return next.handle(newReq);
    } else {
      return next.handle(req);
    }*/
  }

  async getAuthorizationToken(): Promise<string> {
    console.log('In getAuthorizationToken');
    return await this.store
      .select(store => store['allUsers'].authorization)
      .toPromise();
  }
}
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
];
