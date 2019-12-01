import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  LoginUserAction,
  AllUsersActionTypes
} from '../actions/all-users.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class RouteEffects {
  constructor(private action$: Actions, private router: Router) {}

  @Effect({ dispatch: false })
  redirectLoginHome$ = this.action$.pipe(
    ofType<LoginUserAction>(AllUsersActionTypes.LOGIN_USER_SUCCESS),
    tap(() => this.router.navigate(['/home']))
  );

  @Effect({ dispatch: false })
  redirectRegisterHome$ = this.action$.pipe(
    ofType<LoginUserAction>(AllUsersActionTypes.REGISTER_USER_SUCCESS),
    tap(() => this.router.navigate(['/home']))
  );
}
