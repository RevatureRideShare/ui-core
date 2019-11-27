import { Component, OnInit } from '@angular/core';
import { RideStatus } from '../models/user.model';
import { Role } from '../models/user.model';
import { User } from '../models/user.model';
import { HouseLocation } from '../models/houselocation.model';
import { TrainingLocation } from '../models/traininglocation.model';
import { Car } from '../models/car.model';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {IAppState} from '../models/states/app-state.model'; 
import {RegisterUserAction} from '../store/actions/all-users.actions';
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
  trainingLocationName: String;
  seatNumber: number;

  car: Car;
  

  result: any;

  public containers = [0];
  public counter: number = 1;



  constructor(
   private store: Store<IAppState> 
  ) {
    this.car = new Car();
    this.user = new User();
    this.trainingLocation = new TrainingLocation
  }

  ngOnInit() {
    this.allHouseLocations = this.store.select(store => store.locationState.allHousingLocations)
    this.allTrainingLocations = this.store.select(store => store.locationState.allTrainingLocations)
    this.loading$ = this.store.select(store => store.locationState.loading)
    this.error$ = this.store.select(store => store.locationState.error)
    this.store.dispatch(new LoadAllTrainingLocationsAction())
    this.store.dispatch(new LoadAllHouseLocationsAction())

  }

  register() {
    this.store.dispatch(new RegisterUserAction({user: this.user, password: this.password}))
  }

findHouse(event) {
  console.log(event)
  this.trainingLocation 
}

 
    
}
