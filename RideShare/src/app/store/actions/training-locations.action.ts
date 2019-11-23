import { Action } from '@ngrx/store';
import { TrainingLocation } from '../../models/traininglocation.model';

/**
 * All the actions types related to the allTrainingLocation state in ILocationState of location-state.model.ts
 */
export enum TrainingLocationsActionTypes {
  LOAD_ALL_TRAINING_LOCATIONS = '[TRAINING_LOCATION] Load All Training Locations',
  LOAD_ALL_TRAINING_LOCATIONS_SUCCESS = '[TRAINING_LOCATION] Load All Training Locations Success',
  LOAD_ALL_TRAINING_LOCATIONS_FAIL = '[TRAINING_LOCATION] Load All Training Locations Fail'
}

/**
 * The action class of trying to load all training locations
 */
export class LoadAllTrainingLocationsAction implements Action {
  readonly type = TrainingLocationsActionTypes.LOAD_ALL_TRAINING_LOCATIONS;
}

/**
 * The action class of successfully loaded all training locations
 */
export class LoadAllTrainingSuccessLocationsAction implements Action {
  readonly type =
    TrainingLocationsActionTypes.LOAD_ALL_TRAINING_LOCATIONS_SUCCESS;
  constructor(public payload: Array<TrainingLocation>) {}
}

/**
 * The action class of failed to load all training locations
 */
export class LoadAllTrainingFailLocationsAction implements Action {
  readonly type = TrainingLocationsActionTypes.LOAD_ALL_TRAINING_LOCATIONS_FAIL;
  constructor(public payload: Error) {}
}
