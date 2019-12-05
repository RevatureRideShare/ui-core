import { TrainingLocation } from '../traininglocation.model';
import { HouseLocation } from '../houselocation.model';

/**
 * interface ILocationState contains all of the housing locations and training locations
 *
 * Imported by:
 * app-state.model.ts
 * location.action.ts
 * location.reducer.ts
 */
export interface ILocationState {
  /**
   * Contains all of the training locations known in the database
   */
  readonly allTrainingLocations: Array<TrainingLocation>;

  /**
   * 
   * Contains all of the housing locations known in the database
   */
  readonly allHousingLocations: Array<HouseLocation>;

  /**
   * Indicates the loading status of IUserState
   */
  loading: boolean;

  /**
   * Indicates the error when manipulating IUserState if any
   */
  error: Error;
}
