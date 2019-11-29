import { TestBed, getTestBed } from '@angular/core/testing';

import { AllUsersService } from './all-users.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

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

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
