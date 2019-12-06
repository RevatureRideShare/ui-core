import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';
import { HttpResponse } from '@angular/common/http';

/**
 * All the actions types related to the allUsers state
 */
export enum AllUsersActionTypes {
  LOAD_ALL_USERS = '[ADMIN] Loading All Users',
  LOAD_ALL_USERS_SUCCESS = '[ADMIN] Loading All Users Success',
  LOAD_ALL_USERS_FAIL = '[ADMIN] Loading All User Fail',
  REGISTER_USER = '[REGISTER] Adding New User',
  REGISTER_USER_SUCCESS = '[REGISTER] Adding New User Success',
  REGISTER_USER_FAIL = '[REGISTER] Adding New User Fail',
  UPDATE_USER = '[ADMIN] Updating User',
  UPDATE_USER_SUCCESS = '[ADMIN] Updating User Success',
  UPDATE_USER_FAIL = '[ADMIN] Updating User Fail',
  LOGIN_USER = '[LOGIN] Login User',
  LOGIN_USER_SUCCESS = '[LOGIN] Login User Success',
  LOGIN_USER_FAIL = '[LOGIN] Login User Fail',
  LOAD_ALL_DRIVERS = '[HOME] Load All Drivers',
  LOAD_ALL_DRIVERS_SUCCESS = '[HOME] Load All Driver Success',
  LOAD_ALL_DRIVERS_FAIL = '[HOME] Load All Driver Fail'
}

/**
 * The action class of trying to load all users, when an admin logged in
 */
export class LoadAllUsersAction implements Action {
  /**
   * Define the type of action to be LoadAllUsersAction
   */
  readonly type = AllUsersActionTypes.LOAD_ALL_USERS;
}

/**
 * The action class of successfully loaded all users, when an admin logged in
 */
export class LoadAllUsersSuccessAction implements Action {
  /**
   * Define type of action to be LoadAllUsersSuccess
   */
  readonly type = AllUsersActionTypes.LOAD_ALL_USERS_SUCCESS;
  /**
   * The constructor of LoadAllUsersSuccessAction
   * @param payload The list of user retrieved from server when loaded successfully
   */
  constructor(public payload: Array<User>) {}
}

/**
 * The action class of failed to load all users, when an admin logged in
 */
export class LoadAllUsersFailAction implements Action {
  /**
   * Define type of action to be LoadAllUsersFailAction
   */
  readonly type = AllUsersActionTypes.LOAD_ALL_USERS_FAIL;
  /**
   * The constructor of LoadAllUsersFailAction
   * @param payload The occurred error when communicating to server
   */
  constructor(public payload: Error) {}
}

/**
 * The action class of trying to update a particular user
 */
export class UpdateUserAction implements Action {
  /**
   * Define type of action to be UpdateUserAction
   */
  readonly type = AllUsersActionTypes.UPDATE_USER;
  /**
   * The constructor of UpdateUserAction
   * @param payload The new user object need to be updated
   */
  constructor(public payload: User) {}
}

/**
 * The action class of successfully updated a particular user
 */
export class UpdateUserSuccessAction implements Action {
  /**
   * Define the type of action to be UpdateUserSuccessAction
   */
  readonly type = AllUsersActionTypes.UPDATE_USER_SUCCESS;
  /**
   * The constructor of UpdateUserSuccessAction
   * @param payload The updated user that is returned from server
   */
  constructor(public payload: User) {}
}

/**
 * The action class of failed to update a particular user
 */
export class UpdateUserFailAction implements Action {
  /**
   * Define the type of action to be UpdateUserFailActon
   */
  readonly type = AllUsersActionTypes.UPDATE_USER_FAIL;
  /**
   * The constructor of UpdateUserFailAction
   * @param payload The error received from server
   */
  constructor(public payload: Error) {}
}

/**
 * The action class of trying to load all drivers, when a normal user logged in
 */
export class LoadAllDriversAction implements Action {
  /**
   * Define the type of action to be LoadAllDriverActon
   */
  readonly type = AllUsersActionTypes.LOAD_ALL_DRIVERS;
}

/**
 * The action class of successfully loaded all drivers, when a normal user logged in
 */
export class LoadAllDriversSuccessAction implements Action {
  /**
   * Define the type of action to be LoadAllDriverSuccessActon
   */
  readonly type = AllUsersActionTypes.LOAD_ALL_DRIVERS_SUCCESS;
  /**
   * The constructor of LoadAllDriverSuccessAction
   * @param payload The list of driver retrieved from server
   */
  constructor(public payload: Array<User>) {}
}

/**
 * The action class of failed to load all drivers, when a normal user logged in
 */
export class LoadAllDriversFailAction implements Action {
  /**
   * Define the type of action to be LoadAllDriverFailAction
   */
  readonly type = AllUsersActionTypes.LOAD_ALL_DRIVERS_FAIL;
  /**
   * The constructor of LoadAllDriverFailAction
   * @param payload The error received fro server
   */
  constructor(public payload: Error) {}
}

/**
 * The action class of trying to load login user
 */
export class LoginUserAction implements Action {
  /**
   * Define the type of acton to be LoginUserAction
   */
  readonly type = AllUsersActionTypes.LOGIN_USER;
  /**
   * The constructor of LoginUserAction
   * @param payload Contains the user credential to login, including user email and password
   */
  constructor(public payload: { email: string; password: string }) {}
}

/**
 * The action class of successfully loaded login user
 */
export class LoginUserSuccessAction implements Action {
  /**
   * Define the action type to be LoginUserSuccessAction
   */
  readonly type = AllUsersActionTypes.LOGIN_USER_SUCCESS;
  /**
   * The constructor of LoginUserSuccessAction
   * @param payload The user object returned from server after login
   */
  constructor(public payload: HttpResponse<any>) {}
}

/**
 * The action class of failed to load login user
 */
export class LoginUserFailAction implements Action {
  /**
   * Define the type of action to be LoginUserFailAction
   */
  readonly type = AllUsersActionTypes.LOGIN_USER_FAIL;
  /**
   * The constructor of LoginUserFailAction
   * @param payload The error received from server when login failure
   */
  constructor(public payload: Error) {}
}

/**
 * The action of trying to register a new user
 */
export class RegisterUserAction implements Action {
  readonly type = AllUsersActionTypes.REGISTER_USER;
  constructor(public payload: { user: User; password: string }) {}
}

/**
 * The action of successfully registered a new user
 */
export class RegisterUserSuccessAction implements Action {
  /**
   * Define the type of action to be RegisterUserSuccessAction
   */
  readonly type = AllUsersActionTypes.REGISTER_USER_SUCCESS;
  /**
   *  The constructor of RegisterUserSuccessAction
   * @param payload the response returned from server,
   * the headers of response contains the authorization token, and body contains the new user object
   */
  constructor(public payload: HttpResponse<any>) {}
}

/**
 * The action of failed to register a new user
 */
export class RegisterUserFailAction implements Action {
  /**
   * Define the type of action to be RegisterUserFailAction
   */
  readonly type = AllUsersActionTypes.REGISTER_USER_FAIL;
  /**
   * The constructor of RegisterUserFailAction
   * @param payload The error received from server if register failure
   */
  constructor(public payload: Error) {}
}

/**
 * Exporting all-user actions classes
 */
export type AllUserAction =
  | LoadAllUsersAction
  | LoadAllUsersSuccessAction
  | LoadAllUsersFailAction
  | UpdateUserAction
  | UpdateUserSuccessAction
  | UpdateUserFailAction
  | LoadAllDriversAction
  | LoadAllDriversSuccessAction
  | LoadAllDriversFailAction
  | LoginUserAction
  | LoginUserSuccessAction
  | LoginUserFailAction
  | RegisterUserAction
  | RegisterUserSuccessAction
  | RegisterUserFailAction;
