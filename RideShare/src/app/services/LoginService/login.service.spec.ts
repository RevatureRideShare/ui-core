import { TestBed, getTestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
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

describe('LoginService', () => {
  let injector: TestBed;
  let service: LoginService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService],
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    service = injector.get(LoginService);
    httpMock = injector.get(HttpTestingController);
  });

  const User = [
    {
      email: 'test',
      firstName: 'test',
      lastName: 'test',
      phoneNumber: 'test',
      rideStatus: RideStatus.ACTIVE,
      role: Role.DRIVER,
      accountStatus: 'false',
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
  it('should be created', () => {
    service.login('test', 'test').subscribe(data => {
      expect(data).toEqual(User);
    });

    const req = httpMock.expectOne('localhost:3000/login');
    expect(req.request.method).toBe('GET');
    req.flush(User);
  });
});
