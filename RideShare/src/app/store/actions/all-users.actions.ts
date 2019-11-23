import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

/**
 * All the actions types related to the allUsers state in IUserState of user-state.model.ts
 */
export enum AllUsersActionTypes {
  LOAD_ALL_USERS = '[ALL_USERS] Loading All Users',
  LOAD_ALL_USERS_SUCCESS = '[ALL_USERS] Loading All Users Success',
  LOAD_ALL_USERS_FAIL = '[ALL_USERS] Loading All User Fail',
  CREATE_USER = '[ALL_USERS] Adding New User',
  CREATE_USER_SUCCESS = '[ALL_USERS] Adding New User Success',
  CREATE_USER_FAIL = '[ALL_USERS] Adding New User Fail',
  UPDATE_USER = '[ALL_USERS] Updating User',
  UPDATE_USER_SUCCESS = '[ALL_USERS] Updating User Success',
  UPDATE_USER_FAIL = '[ALL_USERS] Updating User Fail'
}

/**
 * The action class of trying to load all users
 */
export class LoadAllUsersAction implements Action {
  readonly type = AllUsersActionTypes.CREATE_USER;
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
 * The action class of trying to create a new user
 */
export class CreateUserAction implements Action {
  readonly type = AllUsersActionTypes.CREATE_USER;
  constructor(public payload: User) {}
}

/**
 * The action class of successfully created a new user
 */
export class CreateUserSuccessAction implements Action {
  readonly type = AllUsersActionTypes.CREATE_USER_SUCCESS;
  constructor(public payload: User) {}
}

/**
 * The action class of failed to create a new user
 */
export class CreateUserFailAction implements Action {
  readonly type = AllUsersActionTypes.CREATE_USER_FAIL;
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