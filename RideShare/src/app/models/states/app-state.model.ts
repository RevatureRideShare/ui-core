import { IUserState } from './user-state.model';
import { ILocationState } from './location-state.model';

/**
 * interface IAppState contains necessary information stored throughout the whole application
 *
 * Imported by: the registartion compenent in registarton.registartion
 * 
 */
export interface IAppState{
  /**
   * authorize: string - contains the JWT for the current session
   */
  readonly authorization: string;

  /**
   * userState: IUserState - contains all user-related information for the application
   */
  readonly userState: IUserState;

  /**
   * locationState: ILocationState - contains all location-related information for the application
   */
  readonly locationState: ILocationState;
}