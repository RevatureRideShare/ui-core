import { Action } from '@ngrx/store';
import { TrainingLocation } from '../../models/traininglocation.model';

/**
 * All the actions types related to the allTrainingLocation state
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
  /**
   * Define the type of action to be LoadAllTrainingLocationsAction
   */
  readonly type = TrainingLocationsActionTypes.LOAD_ALL_TRAINING_LOCATIONS;
}

/**
 * The action class of successfully loaded all training locations
 */
export class LoadAllTrainingSuccessLocationsAction implements Action {
  /**
   * Define the type of action to be LoadAllTrainingSuccessLocationsAction
   */
  readonly type =
    TrainingLocationsActionTypes.LOAD_ALL_TRAINING_LOCATIONS_SUCCESS;
    /**
     * The constructor of LoadAllTrainingSuccessLocationsAction
     * @param payload The list of training locations returned from server
     */
  constructor(public payload: Array<TrainingLocation>) {}
}

/**
 * The action class of failed to load all training locations
 */
export class LoadAllTrainingFailLocationsAction implements Action {
  /**
   * Define the type of action to be LoadAllTrainingFailLocationsAction
   */
  readonly type = TrainingLocationsActionTypes.LOAD_ALL_TRAINING_LOCATIONS_FAIL;
  /**
   * The constructor of LoadAllTrainingFailLocationsAction
   * @param payload The error received from server when fail to load training locations
   */
  constructor(public payload: Error) {}
}

/**
 * Exporting training location action classes
 */
export type TrainingLocationsAction =
  | LoadAllTrainingFailLocationsAction
  | LoadAllTrainingSuccessLocationsAction
  | LoadAllTrainingLocationsAction;
