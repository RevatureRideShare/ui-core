import { User } from '../user.model';

/**
 * interface IUserState contains the current user in session, the drivers and all users
 *
 * Imported by:
 * app-state.model.ts
 */
export interface IUserState {
  /**
   * currentUser: User - contains information for the current user in this session
   */
  readonly currentUser: User;

  /**
   * allUsers: Array<User> - contains all of the users known in the database
   */
  readonly allUsers: Array<User>;

  /**
   * loading: boolean - indicates the current loading state of user-state
   */
  loading: boolean;

  /**
   * error: Error - store the error message for user-state if any
   */
  error: Error;
}