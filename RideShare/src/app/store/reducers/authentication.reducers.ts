import {
  AuthenticationActionTypes,
  AuthenticationAction
} from '../actions/authentication.actions';

/**
 * The initial Authentication token.
 * If no authentication token is loaded yet, the initial authentication token is used
 */
const initialAuthorize = '';

/**
 * The reducer function which updates the authentication token for current login user,
 * depending on the type of actions
 * @param {string} state the current authentication token
 * @param {AuthenticationAction} action the current action need to be handled
 */
export function AuthenticationReducer(
  state: string = initialAuthorize,
  action: AuthenticationAction
) {
  switch (action.type) {
    case AuthenticationActionTypes.LOAD_AUTHENTICATION: {
      return {
        state: action.payload
      };
    }
    case AuthenticationActionTypes.AUTHENTICATION_EXPIRED: {
      return {
        state: initialAuthorize
      };
    }
    default:
      return state;
  }
}
