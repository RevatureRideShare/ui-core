import { TrainingLocation } from '../traininglocation.model';
import { HouseLocation } from '../houselocation.model';

/**
 * interface ILocationState contains all of the housing locations and training locations
 *
 * Imported by:
 * app-state.model.ts
 * location.action.ts
 */
export interface ILocationState {
  /**
   * allTrainingLocations: Array<TrainingLocation> - contains all the training locations known in the database
   */
  readonly allTrainingLocations: Array<TrainingLocation>;
  /**
   * allHousingLocations: Array<HouseLocation> - contains all the known housing locations in the database
   */
  readonly allHousingLocations: Array<HouseLocation>;

  /**
   * loading: boolean - indicates the current loading state of user-state
   */
  loading: boolean;

  /**
   * error: Error - store the error message for user-state if any
   */
  error: Error;
}
