import { User } from '../user.model';

/**
 * interface IUserState contains the current user in session, the drivers and all users
 *
 * Imported by:
 * app-state.model.ts
 */
export interface IUserState {
  /**
   * authorize: string - contains the JWT for the current session
   */
  readonly authorization: string;
  
  /**
   * currentUser: User - contains information for the current user in this session
   */
  readonly currentUser: User;

  /**
   * allUsers: Array<User> - contains all of the users known in the database
   */
  readonly allUsers: Array<User>;

  /**
   * loading: boolean - indicate the loading status of IUserState
   */
  loading: boolean;

  /**
   * error: Error - indicate the error when manipulating IUserState if any
   */
  error: Error;
}