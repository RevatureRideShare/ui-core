import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { of, merge, Observable } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { LoginService } from '../../services/LoginService/login.service';
import { UserRegistrationService } from '../../services/registration/user-registration.service';
import {
  LoginUserAction,
  AllUsersActionTypes,
  LoginUserSuccessAction,
  LoginUserFailAction,
  RegisterUserAction,
  RegisterUserSuccessAction,
  RegisterUserFailAction
} from '../actions/all-users.actions';
import { User } from 'src/app/models/user.model';

@Injectable()
export class AllUserEffects {
  constructor(
    private action$: Actions,
    private loginService: LoginService,
    private registerService: UserRegistrationService
  ) {}

  /**
   * The effect to login user
   */
  @Effect()
  loginUser$ = this.action$.pipe(
    ofType<LoginUserAction>(AllUsersActionTypes.LOGIN_USER),
    mergeMap(data =>
      this.loginService
        .login(data.payload.username, data.payload.password)
        .pipe(
          map((user: User) => new LoginUserSuccessAction(user)),
          catchError(error => of(new LoginUserFailAction(error)))
        )
    )
  );

  /**
   * The effect to register new user
   */
  @Effect()
  register$ = this.action$.pipe(
    ofType<RegisterUserAction>(AllUsersActionTypes.REGISTER_USER),
    mergeMap(data =>
      this.registerService
        .registerUser(data.payload.user, data.payload.password)
        .pipe(
          map((user: User) => new RegisterUserSuccessAction(user)),
          catchError(error => of(new RegisterUserFailAction(error)))
        )
    )
  );

}
