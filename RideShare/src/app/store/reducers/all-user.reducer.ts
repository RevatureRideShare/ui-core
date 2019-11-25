import { 
    AllUsersActionTypes,
    AllUserAction
} from '../../store/actions/all-users.actions';
import { IUserState } from '../../models/states/user-state.model';
import { Stats } from 'fs';

const initialUserState: IUserState = {
  currentUser: undefined,
  allUsers: [],
  loading: false,
  error: undefined
};

export function AllUserReducer(
  state: IUserState = initialUserState,
  action: AllUserAction
) {
  switch (action.type) {
    case AllUsersActionTypes.LOAD_ALL_USERS_SUCCESS: {
      return {
        ...state,
        loading: true
      };
    }
    case AllUsersActionTypes.LOAD_ALL_USERS_SUCCESS: {
      return {
        ...state,
        allUsers: [...state.allUsers, action.payload],
        loading: false
      };
    }
    case AllUsersActionTypes.LOAD_ALL_USERS_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }
    case AllUsersActionTypes.UPDATE_USER: {
      return {
        ...state,
        loading: true
      }
    }
    case AllUsersActionTypes.UPDATE_USER_SUCCESS: {
      state = {
        ...state,
        allUsers: state.allUsers.filter(
          item => item.email !== action.payload.email
        ),
        loading: true
      }
      return {
        ...state,
        allUsers: [...state.allUsers, action.payload],
        loading:false
      }
    }
    case AllUsersActionTypes.UPDATE_USER_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    }
    case AllUsersActionTypes.LOAD_ALL_DRIVERS: {
      return {
        ...state,
        loading: true,
      }
    }
    case AllUsersActionTypes.LOAD_ALL_DRIVERS_SUCCESS: {
      return {
        ...state,
        allUsers: [...state.allUsers, action.payload]
      }
    }
  }
}