import { Component, OnInit } from '@angular/core';
import { RideStatus } from '../models/user.model';
import { Role } from '../models/user.model';
import { User } from '../models/user.model';
import { HouseLocation } from '../models/houselocation.model';
import { TrainingLocation } from '../models/traininglocation.model';
import { Car } from '../models/car.model';
import {Store} from '@ngrx/store';
import {IAppState} from '../models/states/app-state.model'; 

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User;

  password: string;

  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  rideStatus: RideStatus;
  role: Role;
  accountStatus: boolean;

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

  ngOnInit() {}

  register() {
    
  }

 
    
}
