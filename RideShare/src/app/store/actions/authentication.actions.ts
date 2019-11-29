import { Action } from '@ngrx/store';

export enum AuthenticationActionTypes {
  LOAD_AUTHENTICATION = '[AUTH] Load Authentication',
  AUTHENTICATION_EXPIRED = '[AUTH] Authentication Expired'
}

/**
 * The action class of trying to load authentication token
 */
export class LoadAuthenticationAction implements Action {
  readonly type = AuthenticationActionTypes.LOAD_AUTHENTICATION;
  constructor(public payload: string) {}
}

/**
 * The action class of detected token expired
 */
export class AuthenticationExpiredAction implements Action {
  readonly type = AuthenticationActionTypes.AUTHENTICATION_EXPIRED;
}

/**
 * Exporting authentication actions classes
 */
export type AuthenticationAction =
  | LoadAuthenticationAction
  | AuthenticationExpiredAction;
