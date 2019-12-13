import { Action } from '@ngrx/store';
import { HouseLocation } from '../../models/houselocation.model';

/**
 * All the actions types related to the allHouseLocations state
 */
export enum HouseLocationsActionTypes {
  LOAD_ALL_HOUSE_LOCATIONS = '[HOUSE_LOCATIONS] Load All House Locations',
  LOAD_ALL_HOUSE_LOCATIONS_SUCCESS = '[HOUSE_LOCATIONS] Load All House Locations Success',
  LOAD_ALL_HOUSE_LOCATIONS_FAIL = '[HOUSE_LOCATIONS] Load All House Locations Fail'
}

/**
 * The action class of trying to load all house locations
 */
export class LoadAllHouseLocationsAction implements Action {
  /**
   * Define the type of action to ve LoadAllHouseLocationAction
   */
  readonly type = HouseLocationsActionTypes.LOAD_ALL_HOUSE_LOCATIONS;
}

/**
 * The action class of successfully loaded all house locations
 */
export class LoadAllHouseLocationsSuccessAction implements Action {
  /**
   * Define to type of action to be LoadAllHouseLocationsSuccessAction
   */
  readonly type = HouseLocationsActionTypes.LOAD_ALL_HOUSE_LOCATIONS_SUCCESS;
  /**
   * The constructor of LoadAllHouseLocationsSuccessAction
   * @param payload The list of house locations returned from server
   */
  constructor(public payload: Array<HouseLocation>) {}
}

/**
 * The action class of failed to load all house locations
 */
export class LoadAllHouseLocationsFailAction implements Action {
  /**
   * Define the type of action to be LoadAllHouseLocationsFailAction
   */
  readonly type = HouseLocationsActionTypes.LOAD_ALL_HOUSE_LOCATIONS_FAIL;
  /**
   * The constructor of LoadAllHouseLocationsFailAction
   * @param payload The error received from server when fail to load house locations 
   */
  constructor(public payload: Error) {}
}

/**
 * Exporting house location action classes
 */
export type HouseLocationsAction =
  | LoadAllHouseLocationsAction
  | LoadAllHouseLocationsSuccessAction
  | LoadAllHouseLocationsFailAction;
