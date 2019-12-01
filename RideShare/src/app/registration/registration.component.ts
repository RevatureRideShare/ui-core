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
  user: User;

  password: string;
  loading$: Observable<boolean>;
  error$: Observable<Error>;

  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  rideStatus: RideStatus;
  role: Role;
  accountStatus: boolean;

  allTrainingLocations: Observable<Array<TrainingLocation>>;
  allHouseLocations: Observable<Array<HouseLocation>>;
  filteredHouseLocations: Array<HouseLocation>;

  houseLocation: HouseLocation;
  housingLocationName: string;

  trainingLocation: TrainingLocation;
  trainingLocationName: string;
  seatNumber: number;

  car: Car;

  result: any;

  public containers = [0];
  public counter = 1;

  constructor(private store: Store<IAppState>) {
    this.car = new Car();
    this.user = new User();
    this.trainingLocation = new TrainingLocation();
    this.houseLocation = new HouseLocation();
  }

/*   On init we are setting the two observables allHouseLocations and allTrainingLocations to a value from the Store.
  The store is essentially an array of the state of all items in the store. We are using javascripts ability to reference
  an array item by type within the square brackets, then accessing the allHouseLocations array within that state array.
  You will see the pattern repeated throughout ngrx -> [state].array.item or [state].object.value 
  We need to call these two arrays to populate the traing and housin drop downs */

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

  /* passing the user action its payload as an object (key value pairs) */
  register() {
    this.store.dispatch(
      new RegisterUserAction({ user: this.user, password: this.password })
    );
  }
}
