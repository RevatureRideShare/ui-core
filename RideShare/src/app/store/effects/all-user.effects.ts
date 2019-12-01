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

/**
 * The effects related to user actions
 */
@Injectable()
export class AllUserEffects {
  /**
   * Constructor used to inject userActions and services related to user
   * @param {Actions} action$ the action fired, contains type of the action and payload
   * @param {LoginService} loginService services related to login
   * @param {UserRegistrationService} registerService services related to register
   * @param {AllUsersService} userService servies related to get, update users
   * @param {AllDriversService} driverService services realted to drivers
   */
  constructor(
    private action$: Actions,
    private loginService: LoginService,
    private registerService: UserRegistrationService,
    private userService: AllUsersService,
    private driverService: AllDriversService
  ) {}

  /**
   * Side effect of LoginUser,
   * if success trigger LoginUserSuccessAction
   * if faile trigger LoginUserFailAction
   */
  @Effect()
  loginUser$ = this.action$.pipe(
    ofType<LoginUserAction>(AllUsersActionTypes.LOGIN_USER),
    mergeMap(data =>
      this.loginService.login(data.payload.email, data.payload.password).pipe(
        map((user: User) => new LoginUserSuccessAction(user)),
        catchError(error => of(new LoginUserFailAction(error)))
      )
    )
  );

  /**
   * Side effect of registerUser
   * if success trigger RegiserUserSucessAction
   * if fail trigger RegiserUserFailAction
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
   * Side effect of LoadAllUsers,
   * if success trigger LoadALlUserSuccessAction
   * if fail trigger LoadAllUserFailAction
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
   * Side effect of LoadAllDrivers
   * if success trigger LoadAllDriverSuccessAction
   * if fail trigger LoadALlDriverFailAction
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
   * Side effect of UpdataUser
   * if success trigger UpdateUserSuccessAction
   * if faile trigger UpdateUserFailAction
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
