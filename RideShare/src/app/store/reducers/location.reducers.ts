import {
  HouseLocationsActionTypes,
  HouseLocationsAction
} from '../actions/house-locations.actions';
import {
  TrainingLocationsActionTypes,
  TrainingLocationsAction
} from '../actions/training-locations.action';
import { ILocationState } from '../../models/states/location-state.model';
import { TrainingLocation } from 'src/app/models/traininglocation.model';

/**
 * The initial ILocationState.
 * If current ILocationState is not loaded from database yet, the initial state is used
 */
export const initialLocationState: ILocationState = {
  allTrainingLocations: [],
  allHousingLocations: [],
  loading: false,
  error: undefined
};

/**
 * The reducer function which updates housing location states depending on the type of actions
 * @param {ILocationState} state the current location state
 * @param {HouseLocationsAction} action the current action need to be handled
 */
export function AllHousingReducer(
  state: ILocationState = initialLocationState,
  action: HouseLocationsAction
) {
  switch (action.type) {
    case HouseLocationsActionTypes.LOAD_ALL_HOUSE_LOCATIONS: {
      return {
        ...state,
        loading: true
      };
    }
    case HouseLocationsActionTypes.LOAD_ALL_HOUSE_LOCATIONS_SUCCESS: {
      return {
        ...state,
        allHousingLocations: [...state.allHousingLocations, action.payload],
        loading: false
      };
    }
    case HouseLocationsActionTypes.LOAD_ALL_HOUSE_LOCATIONS_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }
    default:
      return state;
  }
}

/**
 * The reducer function which updates training location states depending on the type of actions
 * @param {ILocationState} state the current location state
 * @param {TrainingLocationsAction} action the current action need to be handled
 */
export function AllTrainingReducer(
  state: ILocationState = initialLocationState,
  action: TrainingLocationsAction
) {
  console.log('location.reducers.ts');
  console.log(action);
  switch (action.type) {
    case TrainingLocationsActionTypes.LOAD_ALL_TRAINING_LOCATIONS: {
      return {
        ...state,
        loading: true
      };
    }
    case TrainingLocationsActionTypes.LOAD_ALL_TRAINING_LOCATIONS_SUCCESS: {
      return {
        ...state,
        allTrainingLocations: [...state.allTrainingLocations, ...action.payload],
        loading: false
      };
    }
    case TrainingLocationsActionTypes.LOAD_ALL_TRAINING_LOCATIONS_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }
    default:
      return state;
  }
}
