import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { LoginService } from '../../services/LoginService/login.service'
import { UserRegistrationService } from '../../services/registration/user-registration.service';

@Injectable()
export class AllUserEffects {
    constructor(
        private action$: Actions,
        private loginService: LoginService,
        private registerService: UserRegistrationService
    ) {}

    @Effect()
    loginUser$ = this.action$.pipe(
        
    )
}