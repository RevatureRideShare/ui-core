import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { UserRegistrationService } from '../../services/registration/user-registration.service';
import { LoginService } from '../../services/LoginService/login.service';

@Injectable()
export class ALlUserEffects {
  constructor(
    private actions$: Actions,
    private registerService: UserRegistrationService,
    private loginService: LoginService
  ) {}

  @Effect()
  loadingAllUser$ = this.actions$.pipe();
}
