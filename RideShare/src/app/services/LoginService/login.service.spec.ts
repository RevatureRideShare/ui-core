import { TestBed, getTestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import { User } from '../../models/user.model';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

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
  };

  it('login() should return user', () => {
    service.login('test', 'test').subscribe(data => {
      expect(data).toEqual(user);
    });

    const req = httpMock.expectOne(
      environment.userUrl + environment.userEndpoint
    );
    expect(req.request.method).toBe('GET');
    req.flush(user);
  });
});
