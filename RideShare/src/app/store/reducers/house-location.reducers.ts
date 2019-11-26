import { 
    HouseLocationsActionTypes,
    HouseLocationsAction
} from '../actions/house-locations.actions';
import { ILocationState } from '../../models/states/location-state.model';

/**
 * The initial ILocationState. 
 * If current ILocationState is not loaded from database yet, the initial state is used 
 */
const initialHousingState: ILocationState = {
    allTrainingLocations: [],
    allHousingLocations: [],
    loading: false,
    error: undefined
}

/**
 * The reducer function which updates housing location states depending on the type of actions
 * @param {ILocationState} state the current housing location state
 * @param {HouseLocationsAction} action the current action need to be handled
 */
export function AllHousingReducer(
    state: ILocationState = initialHousingState,
    action: HouseLocationsAction
) {
    switch(action.type) {
        case HouseLocationsActionTypes.LOAD_ALL_HOUSE_LOCATIONS: {
            return {
                ...state,
                loading: true
            }
        }
        case HouseLocationsActionTypes.LOAD_ALL_HOUSE_LOCATIONS_SUCCESS: {
            return {
                ...state,
                allHousingLocations: [...state.allHousingLocations, action.payload],
                loading: false
            }
        }
        case HouseLocationsActionTypes.LOAD_ALL_HOUSE_LOCATIONS_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
    }
}