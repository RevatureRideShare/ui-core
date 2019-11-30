import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, Role, RideStatus } from '../models/user.model';
import { Store } from '@ngrx/store';
import { IAppState } from '../models/states/app-state.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // currUser: Observable<User>;
  currUser: User = {
    email: 'test@email.com',
    firstName: 'Test',
    lastName: 'Admin',
    phoneNumber: '5557779999',
    rideStatus: RideStatus.ACTIVE,
    role: Role.ADMIN,
    accountStatus: true,
    houseLocation: {
      address1: 'Street',
      address2: 'Apt.',
      city: 'Tampa',
      state: 'FL',
      zipCode: '12345',
      housingLocationName: 'IQ Apartments',
      trainingLocation: {
        trainingLocationName: 'USF'
      }
    },
    car: { seatNumber: 0 }
  };

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    /*this.currUser = this.store.select(
      store => store.userState['currUser'].currUser
    );*/
  }
}
