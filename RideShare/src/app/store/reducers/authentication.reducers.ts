import { 
    AuthenticationActionTypes,
    AuthenticationAction
} from '../actions/authentication.actions';

const initialAuthorize = '';

export function AuthenticationReducer(
    state: string,
    action: AuthenticationAction
) {
    switch (action.type) {
        case AuthenticationActionTypes.LOAD_AUTHENTICATION: {
            state: action
        }
    }
}