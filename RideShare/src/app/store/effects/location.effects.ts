import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { of, from } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { HousingLocationService } from 
    '../../services/HousingLocationService/housing-location.service';
import { TrainingLocationService } from
    '../../services/TrainingLocationService/training-location.service';
import {
  LoadAllTrainingLocationsAction,
  TrainingLocationsActionTypes,
  LoadAllTrainingSuccessLocationsAction,
  LoadAllTrainingFailLocationsAction
} from '../actions/training-locations.action';

@Injectable()
export class LocationEffects {
  constructor(
    private actions$: Actions,
    private trainingLocationService: TrainingLocationService,
    private housingLocationService: HousingLocationService
  ) {}

  @Effect()
  loadingLocation$ = this.actions$.pipe(
    ofType<LoadAllTrainingLocationsAction>(
      TrainingLocationsActionTypes.LOAD_ALL_TRAINING_LOCATIONS
    ),
    mergeMap(() =>
      this.trainingLocationService.getTrainingLocations().pipe(
        map(data => new LoadAllTrainingSuccessLocationsAction(data)),
        // map(data => console.log(data)),
        catchError(error => of(new LoadAllTrainingFailLocationsAction(error)))
      )
    )
  );
}