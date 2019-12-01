import { TestBed, getTestBed } from '@angular/core/testing';

import { AllUsersService } from './all-users.service';
import { User, Role, RideStatus } from '../../models/user.model';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

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
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  const UserList: User[] = [
    {
      email: 'test',
      firstName: 'test',
      lastName: 'test',
      phoneNumber: 'test',
      rideStatus: RideStatus.ACTIVE,
      role: Role.DRIVER,
      accountStatus: false,
      houseLocation: {
        locationID: 1,
        address1: 'test',
        address2: 'test',
        city: 'test',
        state: 'test',
        zipCode: 'test',
        housingLocationName: 'IQ',
        trainingLocation: { trainingLocationID: 1, trainingLocationName: 'USF' }
      },
      carDto: { seatNumber: 4 }
    },
    {
      email: 'test2',
      firstName: 'test2',
      lastName: 'test2',
      phoneNumber: 'test2',
      rideStatus: RideStatus.ACTIVE,
      role: Role.RIDER,
      accountStatus: false,
      houseLocation: {
        locationID: 1,
        address1: 'test',
        address2: 'test',
        city: 'test',
        state: 'test',
        zipCode: 'test',
        housingLocationName: 'IQ',
        trainingLocation: { trainingLocationID: 1, trainingLocationName: 'USF' }
      },
      carDto: null
    }
  ];

  it('getAllUsers should get users', () => {
    service.getAllUsers().subscribe(data => {
      expect(data).toEqual(UserList);
    });

    const req = httpMock.expectOne(
      environment.userUrl + environment.userEndpoint
    );
    expect(req.request.method).toBe('GET');
    req.flush(UserList);
  });
});
