import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { HousingLocationService } from '../../services/HousingLocationService/housing-location.service';
import { TrainingLocationService } from '../../services/TrainingLocationService/training-location.service';
import {
  LoadAllTrainingLocationsAction,
  TrainingLocationsActionTypes,
  LoadAllTrainingSuccessLocationsAction,
  LoadAllTrainingFailLocationsAction
} from '../actions/training-locations.action';
import {
  LoadAllHouseLocationsAction,
  HouseLocationsActionTypes,
  LoadAllHouseLocationsSuccessAction,
  LoadAllHouseLocationsFailAction
} from '../actions/house-locations.actions';
import { TrainingLocation } from 'src/app/models/traininglocation.model';

/**
 * The effects related to housing and training loactions
 */
@Injectable()
export class LocationEffects {
  /**
   * Contructor used to inject action, training loaction services and housing location serivces
   * @param {Actions} actions$ the action fired, contains type of the action and the payload
   * @param {TrainingLocationService} trainingLocationService services related to training loaction
   * @param {HousingLocationService} housingLocationService services related to housing location
   */
  constructor(
    private actions$: Actions,
    private trainingLocationService: TrainingLocationService,
    private housingLocationService: HousingLocationService
  ) {}
  
  /**
   * Side effect of LoadAllTrainingLocation, 
   * if success trigger LoadALlTrainingLocationsSuccessAction
   * if failed trigger LoadAllTrainingLocationsFailAction
   */
  @Effect()
  loadingTrainingLocation$ = this.actions$.pipe(
    ofType<LoadAllTrainingLocationsAction>(
      TrainingLocationsActionTypes.LOAD_ALL_TRAINING_LOCATIONS
    ),
    mergeMap(() =>
      this.trainingLocationService.getTrainingLocations().pipe(
        map(data => new LoadAllTrainingSuccessLocationsAction(data)),
        catchError(error => of(new LoadAllTrainingFailLocationsAction(error)))
      )
    )
  );

  /**
   * Side effect of LoadALlHouseLocations
   * if success trigger LoadAllHouseLocationsSuccessAction
   * if fail trigger LoadAllHouseLocationFailAction
   */
  @Effect()
  loadingHousingLocation$ = this.actions$.pipe(
    ofType<LoadAllHouseLocationsAction>(
      HouseLocationsActionTypes.LOAD_ALL_HOUSE_LOCATIONS
    ),
    mergeMap(() =>
      this.housingLocationService.getHousingLocations().pipe(
        map(data => new LoadAllHouseLocationsSuccessAction(data)),
        catchError(error => of(new LoadAllHouseLocationsFailAction(error)))
      )
    )
  );
}
