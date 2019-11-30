import { TestBed, getTestBed } from '@angular/core/testing';

import { AllUsersService } from './all-users.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { 
  User,
  Role,
  RideStatus
 } from '../../models/user.model';

describe('AllUsersService', () => {
  let injector: TestBed;
  let service: AllUsersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllUsersService],
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    service = injector.get(AllUsersService);
    httpMock = injector.get(HttpClientTestingModule);
  });

  afterEach(() => {
    httpMock.verify();
  });

  const user: User = {
    email: 'test',
    firstName: 'test',
    lastName: 'test',
    phoneNumber: 'test',
    rideStatus: RideStatus.ACTIVE,
    role: Role.DRIVER,
    accountStatus: false,
    houseLocation: {
      address1: 'test',
      address2: 'test',
      city: 'test',
      state: 'test',
      zipCode: 'test',
      housingLocationName: 'IQ',
      trainingLocation: { trainingLocationName: 'USF' }
    },
    car: { seatNumber: 4 }
  };
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
