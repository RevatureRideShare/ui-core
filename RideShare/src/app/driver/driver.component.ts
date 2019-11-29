import { Component, OnInit } from '@angular/core';
import { User, RideStatus, Role } from '../models/user.model';
import { HouseLocation } from '../models/houselocation.model';
import { Car } from '../models/car.model';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  allDrivers: Array<User> = new Array<User>();
  testUser: User = {
    email: 'hello@email.com',
    firstName: 'Hello',
    lastName: 'World',
    phoneNumber: '555-555-5555',
    rideStatus: RideStatus.ACTIVE,
    role: Role.DRIVER,
    accountStatus: true,
    houseLocation: {
      address1: 'Here',
      address2: 'There',
      city: 'Tampa',
      state: 'FL',
      zipCode: '12738',
      housingLocationName: 'IQ Apartments',
      trainingLocation: { trainingLocationName: 'USF' }
    },
    car: { seatNumber: 4 }
  };

  displayedColumns: string[] = [
    'name',
    'email',
    'phoneNumber',
    'houseLocationName',
    'carSeats'
  ];

  constructor() {
    this.allDrivers.push(this.testUser);
    this.allDrivers.push(this.testUser);
  }

  ngOnInit() {}
}
