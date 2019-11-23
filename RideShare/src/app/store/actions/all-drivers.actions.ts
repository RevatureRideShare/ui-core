import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';

/**
 * All the actions types related to the allDrivers state in IUserState of user-state.model.ts
 */
export enum DriversActionTypes {
  LOAD_ALL_DRIVERS = '[ALL_DRIVERS] Load All Drivers',
  LOAD_ALL_DRIVERS_SUCCESS = '[ALL_DRIVERS] Load All Driver Success',
  LOAD_ALL_DRIVERS_FAIL = '[ALL_DRIVERS] Load All Driver Fail'
}

/**
 * The action class of trying to load all drivers
 */
export class LoadAllDriversAction implements Action {
  readonly type = DriversActionTypes.LOAD_ALL_DRIVERS;
}

/**
 * The action class of successfully loaded all drivers
 */
export class LoadAllDriversSuccessAction implements Action {
  readonly type = DriversActionTypes.LOAD_ALL_DRIVERS_SUCCESS;
  constructor (public payload: Array<User>) {}
}

/**
 * The action class of failed to load all drivers
 */
export class LoadAllDriversFailAction implements Action {
  readonly type = DriversActionTypes.LOAD_ALL_DRIVERS_FAIL;
  constructor(public payload: Error) {}
}