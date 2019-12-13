import { User } from '../user.model';

/**
 * interface IUserState contains the current user in session, the drivers and all users
 *
 * Imported by:
 * app-state.model.ts
 * user-state.model.ts
 * interceptor.services.ts
 * all-users.reducer.ts
 */
export interface IUserState {
  /**
   * Contains the JWT for the current session
   */
  readonly authorization: string;
  
  /**
   * Contains information for the current user in this session
   */
  readonly currentUser: User;

  /**
   * Contains all of the users known in the database
   */
  readonly allUsers: Array<User>;

  /**
   * Indicates the loading status of IUserState
   */
  loading: boolean;

  /**
   * Indicates the error when manipulating IUserState if any
   */
  error: Error;
}