import {
  AllUsersActionTypes,
  AllUserAction
} from '../actions/all-users.actions';
import { IUserState } from '../../models/states/user-state.model';

/**
 * The initial IUserState.
 * If current IUserState is not loaded from database yet, the initial state is used
 */
export const initialUserState: IUserState = {
  authorization: null,
  currentUser: undefined,
  allUsers: [],
  loading: false,
  error: undefined
};

/**
 * The reducer function which updates user states depending on the type of actions
 * @param {IUserState} state the current users state
 * @param {AllUserAction} action the current action need to be handled
 */
export function AllUserReducer(
  state: IUserState = initialUserState,
  action: AllUserAction
) {
  switch (action.type) {
    case AllUsersActionTypes.LOAD_ALL_USERS: {
      return {
        ...state,
        loading: true
      };
    }
    case AllUsersActionTypes.LOAD_ALL_USERS_SUCCESS: {
      return {
        ...state,
        allUsers: action.payload,
        loading: false
      };
    }
    case AllUsersActionTypes.LOAD_ALL_USERS_FAIL: {
      return {
        ...state,
        authorization: null,
        currentUser: undefined,
        loading: false,
        error: action.payload
      };
    }
    case AllUsersActionTypes.UPDATE_USER: {
      return {
        ...state,
        loading: true
      };
    }
    case AllUsersActionTypes.UPDATE_USER_SUCCESS: {
      state = {
        ...state,
        allUsers: state.allUsers.filter(
          item => item.email !== action.payload.email
        ),
        loading: true
      };
      return {
        ...state,
        allUsers: [...state.allUsers, action.payload],
        loading: false
      };
    }
    case AllUsersActionTypes.UPDATE_USER_FAIL: {
      return {
        ...state,
        authorization: null,
        currentUser: undefined,
        loading: false,
        error: action.payload
      };
    }
    case AllUsersActionTypes.LOAD_ALL_DRIVERS: {
      return {
        ...state,
        loading: true
      };
    }
    case AllUsersActionTypes.LOAD_ALL_DRIVERS_SUCCESS: {
      return {
        ...state,
        allUsers: action.payload,
        loading: false
      };
    }
    case AllUsersActionTypes.LOAD_ALL_DRIVERS_FAIL: {
      return {
        ...state,
        authorization: null,
        currentUser: undefined,
        loading: false,
        error: action.payload
      };
    }
    case AllUsersActionTypes.LOGIN_USER: {
      return {
        ...state,
        loading: true
      };
    }
    case AllUsersActionTypes.LOGIN_USER_SUCCESS: {
      console.log('login success reducer, print header and body of response');
      console.log(action.payload.headers);
      console.log(action.payload.body);
      return {
        ...state,
        authorization: action.payload.headers, // TODO get correct auth token from header
        currentUser: action.payload.body,
        loading: false
      };
    }
    case AllUsersActionTypes.LOGIN_USER_FAIL: {
      return {
        ...state,
        authorization: null,
        currentUser: undefined,
        loading: false,
        error: action.payload
      };
    }
    case AllUsersActionTypes.REGISTER_USER: {
      return {
        ...state,
        loading: true
      };
    }
    case AllUsersActionTypes.REGISTER_USER_SUCCESS: {
      console.log(
        'register success reducer, print header and body of response'
      );
      console.log(action.payload.headers);
      console.log(action.payload.body);
      return {
        ...state,
        authorization: action.payload.headers, // TODO get correct auth token from header
        currentUser: action.payload.body,
        allUsers: [...state.allUsers, action.payload.body],
        loading: false
      };
    }
    case AllUsersActionTypes.REGISTER_USER_FAIL: {
      return {
        ...state,
        authorization: null,
        currentUser: undefined,
        loading: false,
        error: action.payload
      };
    }
    default:
      return state;
  }
}
