import { Component, OnInit } from '@angular/core';
import { RideStatus } from '../models/user.model';
import { Role } from '../models/user.model';
import { User } from '../models/user.model';
import { HouseLocation } from '../models/houselocation.model';
import { TrainingLocation } from '../models/traininglocation.model';
import { Car } from '../models/car.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState } from '../models/states/app-state.model';
import { RegisterUserAction } from '../store/actions/all-users.actions';
import { LoadAllTrainingLocationsAction } from '../store/actions/training-locations.action';
import { LoadAllHouseLocationsAction } from '../store/actions/house-locations.actions';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  /**
   * Contains the new user information that is being registered
   */
  user: User;
  /**
   * Contains the password entered by the new user
   */
  password: string;
  /**
   * Contains the loading status retrieves from store
   */
  loading$: Observable<boolean>;
  /**
   * Contains the error message retrieves from store if any
   */
  error$: Observable<Error>;
  /**
   * Contains the email address entered by the new user
   */
  email: string;
  /**
   * Contains the first name entered by the new user
   */
  firstName: string;
  /**
   * Contains the last name entered by the new user
   */
  lastName: string;
  /**
   * Contains the phone number entered by the new user
   */
  phoneNumber: string;
  rideStatus: RideStatus; //
  /**
   * Contains the role selected by the new user, rider or driver
   */
  role: Role;
  accountStatus: boolean; //

  /**
   * Contains the observable array of training locations
   * retrieves from store
   */
  allTrainingLocations: Observable<Array<TrainingLocation>>;
  /**
   * Contains the observable array of house locations
   * retrieves from store
   */
  allHouseLocations: Observable<Array<HouseLocation>>;
  filteredHouseLocations: Array<HouseLocation>; //

  houseLocation: HouseLocation; //
  housingLocationName: string; //

  trainingLocation: TrainingLocation; //
  trainingLocationName: string; //
  /**
   * Contains number of seats the new user plans to share
   */
  seatNumber: number;

  car: Car; //

  result: any; //

  public containers = [0]; //
  public counter = 1; //

  constructor(private store: Store<IAppState>) {
    this.car = new Car(); //
    this.user = new User();
    this.trainingLocation = new TrainingLocation(); //
    this.houseLocation = new HouseLocation(); //
  }

  /**
   * Retrieves house and training location from store onInit component
   */
  ngOnInit() {
    this.allHouseLocations = this.store.select(
      store => store['allHousingLocations'].allHousingLocations
    );
    this.loading$ = this.store.select(
      store => store['allHousingLocations'].loading
    );
    this.error$ = this.store.select(
      store => store['allHousingLocations'].error
    );
    this.allTrainingLocations = this.store.select(
      store => store['allTrainingLocations'].allTrainingLocations
    );
    this.loading$ = this.store.select(
      store => store['allTrainingLocations'].loading
    );
    this.error$ = this.store.select(
      store => store['allTrainingLocations'].error
    );
    this.store.dispatch(new LoadAllTrainingLocationsAction());
    this.store.dispatch(new LoadAllHouseLocationsAction());
  }

  /**
   * Register new user by using the user object and the password to create a registerUserAction
   */
  register() {
    this.store.dispatch(
      new RegisterUserAction({ user: this.user, password: this.password })
    );
  }
}
