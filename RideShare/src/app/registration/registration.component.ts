import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { UserRegistrationService } from '../services/registration/user-registration.service';
import { RideStatus } from '../models/user.model';
import { Role } from '../models/user.model';
import { User } from '../models/user.model';
import { HouseLocation } from '../models/houselocation.model';
import { TrainingLocation } from '../models/traininglocation.model';
import { Car } from '../models/car.model';
import {Store} from '@ngrx/store'

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
  housingLoactionName: string;

  trainingLocation: TrainingLocation;
  trainingLocationName: String;
  seatNumber: number;

  car: Car;
  

  result: any;

  public containers = [0];
  public counter: number = 1;



  constructor(
    private svc: UserRegistrationService,
    private router: Router,
    private http: HttpClient
    private store: Store<IAppState>
  ) {
    this.car = new Car();
    this.user = new User();
    this.trainingLocation = new TrainingLocation
  }

  ngOnInit() {}

  register() {
    this.result = this.svc.registerUser(
      this.firstName,
      this.lastName,
      this.email,
      this.password,
      this.phoneNumber,
      this.role,
      this.userCode,
      this.userBiography,
      this.workType
    );

    if (this.result == true) {
      alert('registration successful');
      this.router.navigateByUrl('login');
      return true;
    } else {
      alert('registration failed');
      this.router.navigateByUrl('login');
      return false;
    }
  }

  add() {
    if (this.containers.length < 5) {
      this.containers.push(this.counter);
      this.counter++;
    }
  }

  remove() {
    let element = document.getElementsByClassName('company-code');
    if (this.containers.length > 1) {
      element[this.containers.length - 1].parentNode.removeChild(
        element[this.containers.length - 1]
      );
      const index = this.containers.indexOf(this.containers.length - 1, 0);
      if (index > -1) {
        this.containers.splice(index, 1);
        this.counter--;
      }
    }
  }
}
