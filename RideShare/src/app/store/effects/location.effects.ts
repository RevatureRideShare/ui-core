import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { of, from } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { HousingLocationService } from 
    '../../services/HousingLocationService/housing-location.service';
import { TrainingLocationService } from
    '../../services/TrainingLocationService/training-location.service';

@Injectable()
export class LocationEffects {
  constructor(
    private actions$: Actions,
    private traingLocationService: TrainingLocationService,
    private housingLocationService: HousingLocationService
  ) {}

}