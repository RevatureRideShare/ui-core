import { Action } from '@ngrx/store';

export enum AuthenticationActionTypes {
  LOAD_AUTHENTICATION = '[AUTH] Load Authentication',
  AUTHENTICATION_EXPIRED = '[AUTH] Authentication Expired'
}

export class LoadAuthenticationAction implements Action {
  readonly type = AuthenticationActionTypes.LOAD_AUTHENTICATION;
}

export class AuthenticationExpiredAction implements Action {
  readonly type = AuthenticationActionTypes.AUTHENTICATION_EXPIRED;
}
