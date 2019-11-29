import { TestBed, getTestBed } from '@angular/core/testing';

import { AllDriversService } from './all-drivers.service';
import { User } from '../../models/user.model';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

enum RideStatus {
  INACTIVE,
  ACTIVE
}
enum Role {
  RIDER,
  DRIVER
}

describe('AllDriversService', () => {
  let injector: TestBed;
  let service: AllDriversService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllDriversService],
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    service = injector.get(AllDriversService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  const DriverList: User[] = [
    {
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
    },
    {
      email: 'test2',
      firstName: 'test2',
      lastName: 'test2',
      phoneNumber: 'test2',
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
    }
  ];
  it('getAllDrivers should return drivers', () => {
    service.getAllDrivers().subscribe(data => {
      expect(data).toEqual(DriverList);
    });

    const req = httpMock.expectOne('http://localhost:3001/user?role=DRIVER');
    expect(req.request.method).toBe('GET');
    req.flush(DriverList);
  });
});
