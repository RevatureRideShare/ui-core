import { TrainingLocation } from '../traininglocation.model';
import { HouseLocation } from '../houselocation.model';

/**
 * interface ILocationState contains all of the housing locations and training locations
 *
 * Imported by:
 * app-state.model.ts
 */
export interface ILocationState{
  readonly allTrainingLocations: Array<TrainingLocation>;
  readonly allHousingLocations: Array<HouseLocation>;
}