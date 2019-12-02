import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AllUserReducer } from './store/reducers/all-user.reducers';
import {
  AllTrainingReducer,
  AllHousingReducer
} from './store/reducers/location.reducers';
import { AuthenticationReducer } from './store/reducers/authentication.reducers';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { DriverComponent } from './driver/driver.component';
import { AdminComponent } from './admin/admin.component';
import { IsLocationPipe } from './pipes/is-location.pipe';

// This is the material toolbar import and associated icon import
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

// these ng material imports are used in the registration and login components
import {
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule
} from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { TrainingLocationService } from './services/TrainingLocationService/training-location.service';
import { LocationEffects } from './store/effects/location.effects';
import { AllUserEffects } from './store/effects/all-user.effects';
import { RouteEffects } from './store/effects/route.effects';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    ProfileComponent,
    DriverComponent,
    AdminComponent,
    IsLocationPipe
  ],
  imports: [
    BrowserModule,
    routing,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatTableModule,
    MatMenuModule,
    EffectsModule.forRoot([LocationEffects, AllUserEffects, RouteEffects]),
    StoreModule.forRoot({
      allUsers: AllUserReducer,
      allTrainingLocations: AllTrainingReducer,
      allHousingLocations: AllHousingReducer,
      authentication: AuthenticationReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [TrainingLocationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
