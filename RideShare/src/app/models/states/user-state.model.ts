import { User } from '../user.model';

/**
 * interface IUserState contains the current user in session, the drivers and all users
 *
 * Imported by:
 * app-state.model.ts
 */
export interface IUserState{
  /**
   * currentUser: User - contains information for the current user in this session
   */
  currentUser: User;

  /**
   * allDrivers: Array<User> - contains all of the drivers known in the database
   */
  allDrivers: Array<User>;

  /**
   * allUsers: Array<User> - contains all of the users known in the database
   */
  allUsers: Array<User>;
}