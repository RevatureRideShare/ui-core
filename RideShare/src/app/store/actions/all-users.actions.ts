import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

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
 * The action class of trying to load all users
 */
export class LoadAllUsersAction implements Action {
  readonly type = AllUsersActionTypes.REGISTER_USER;
}

/**
 * The action class of successfully loaded all users
 */
export class LoadAllUsersSuccessAction implements Action {
  readonly type = AllUsersActionTypes.LOAD_ALL_USERS_SUCCESS;
  constructor(public payload: Array<User>) {}
}

/**
 * The action class of failed to load all users
 */
export class LoadAllUsersFailAction implements Action {
  readonly type = AllUsersActionTypes.LOAD_ALL_USERS_FAIL;
  constructor(public payload: Error) {}
}

/**
 * The action class of trying to update a particular user
 */
export class UpdateUserAction implements Action {
  readonly type = AllUsersActionTypes.UPDATE_USER;
  constructor(public payload: User) {}
}

/** 
 * The action class of successfully updated a particular user
 */
export class UpdateUserSuccessAction implements Action {
  readonly type = AllUsersActionTypes.UPDATE_USER_SUCCESS;
  constructor(public payload: User) {}
}

/**
 * The action class of failed to update a particular user
 */
export class UpdateUserFailAction implements Action {
  readonly type = AllUsersActionTypes.UPDATE_USER;
  constructor(public payload: Error) {}
}

/**
 * The action class of trying to load all drivers
 */
export class LoadAllDriversAction implements Action {
  readonly type = AllUsersActionTypes.LOAD_ALL_DRIVERS;
}

/**
 * The action class of successfully loaded all drivers
 */
export class LoadAllDriversSuccessAction implements Action {
  readonly type = AllUsersActionTypes.LOAD_ALL_DRIVERS_SUCCESS;
  constructor(public payload: Array<User>) {}
}

/**
 * The action class of failed to load all drivers
 */
export class LoadAllDriversFailAction implements Action {
  readonly type = AllUsersActionTypes.LOAD_ALL_DRIVERS_FAIL;
  constructor(public payload: Error) {}
}

export class LoginUserAction implements Action {
  readonly type = AllUsersActionTypes.LOGIN_USER;
  constructor(public payload: {username: string, password: string}) {}
}

export class LoginUserSuccessAction implements Action {
  readonly type = AllUsersActionTypes.LOGIN_USER_SUCCESS;
  constructor(public payload: User) {}
}

export class LoginUserFailAction implements Action {
  readonly type = AllUsersActionTypes.LOGIN_USER_FAIL;
  constructor(public payload: Error) {}
}

export class RegisterUserAction implements Action {
  readonly type = AllUsersActionTypes.REGISTER_USER;
  constructor(public payload: {user:User, password: string}) {}
}

export class RegisterUserSuccessAction implements Action {
  readonly type = AllUsersActionTypes.REGISTER_USER_SUCCESS;
  constructor(public payload: User) {}
}

export class RegisterUserFailAction implements Action {
  readonly type = AllUsersActionTypes.REGISTER_USER_FAIL;
  constructor(public payload: Error) {}
}