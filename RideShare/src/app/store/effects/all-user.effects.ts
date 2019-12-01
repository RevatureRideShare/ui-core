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
  RegisterUserFailAction,
  LoadAllUsersAction,
  LoadAllUsersSuccessAction,
  LoadAllUsersFailAction,
  LoadAllDriversAction,
  LoadAllDriversSuccessAction,
  LoadAllDriversFailAction,
  UpdateUserAction,
  UpdateUserSuccessAction,
  UpdateUserFailAction
} from '../actions/all-users.actions';
import { User } from 'src/app/models/user.model';
import { AllUsersService } from 'src/app/services/AllUsersServices/all-users.service';
import { AllDriversService } from 'src/app/services/AllDriversServices/all-drivers.service';
import { HttpResponse } from '@angular/common/http';

@Injectable()
export class AllUserEffects {
  constructor(
    private action$: Actions,
    private loginService: LoginService,
    private registerService: UserRegistrationService,
    private userService: AllUsersService,
    private driverService: AllDriversService
  ) {}

  /**
   * The effect to login user
   */
  @Effect()
  loginUser$ = this.action$.pipe(
    ofType<LoginUserAction>(AllUsersActionTypes.LOGIN_USER),
    mergeMap(data =>
      this.loginService.login(data.payload.email, data.payload.password).pipe(
        map((res :HttpResponse<User>) => new LoginUserSuccessAction(res)),
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

  /**
   * The effect to get all users
   */
  @Effect()
  getAllUsers$ = this.action$.pipe(
    ofType<LoadAllUsersAction>(AllUsersActionTypes.LOAD_ALL_USERS),
    mergeMap(() =>
      this.userService.getAllUsers().pipe(
        map(data => new LoadAllUsersSuccessAction(data)),
        catchError(error => of(new LoadAllUsersFailAction(error)))
      )
    )
  );

  /**
   * The effect to get all drivers
   */
  @Effect()
  getAllDrivers$ = this.action$.pipe(
    ofType<LoadAllDriversAction>(AllUsersActionTypes.LOAD_ALL_DRIVERS),
    mergeMap(() =>
      this.driverService.getAllDrivers().pipe(
        map(data => new LoadAllDriversSuccessAction(data)),
        catchError(error => of(new LoadAllDriversFailAction(error)))
      )
    )
  );

  /**
   * The effect to update certain user
   */
  @Effect()
  updateUser$ = this.action$.pipe(
    ofType<UpdateUserAction>(AllUsersActionTypes.UPDATE_USER),
    mergeMap((data) => 
    this.userService.updateUser(data.payload).pipe(
      map(user => new UpdateUserSuccessAction(user)),
      catchError(error => of(new UpdateUserFailAction(error)))
    )
    )
  )
}
