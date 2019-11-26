import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AllUserReducer } from './store/reducers/all-user.reducers';
import { AllTrainingReducer, AllHousingReducer } from './store/reducers/location.reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    StoreModule.forRoot({
      allUsers: AllUserReducer,
      allTrainingLocation: AllTrainingReducer,
      allHousingLocation: AllHousingReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
