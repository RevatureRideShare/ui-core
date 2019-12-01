import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  LoginUserAction,
  AllUsersActionTypes
} from '../actions/all-users.actions';
import { tap } from 'rxjs/operators';

/**
 * The effect for redirecting pages
 */
@Injectable()
export class RouteEffects {
  /**
   * Constructor used to inject Action and Router
   * @param {Actions} action$ the action fired, contains type of the action and payload
   * @param {Router} router the router used to redirect page
   */
  constructor(private action$: Actions, private router: Router) {}

  /**
   * Side effect of LoginUserSuccess
   * redirect to HOME page after successfully login
   */
  @Effect({dispatch:false})
  redirectHome$ = this.action$.pipe(
    ofType<LoginUserAction>(AllUsersActionTypes.LOGIN_USER_SUCCESS),
    tap(() => this.router.navigate(['/home']))
  );
}
