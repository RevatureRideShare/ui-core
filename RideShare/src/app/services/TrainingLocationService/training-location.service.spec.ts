import { TestBed, getTestBed } from '@angular/core/testing';

import { TrainingLocationService } from './training-location.service';
import { TrainingLocation } from '../../models/traininglocation.model';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

describe('TrainingLocationService', () => {
  let injector: TestBed;
  let service: TrainingLocationService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainingLocationService],
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    service = injector.get(TrainingLocationService);
    httpMock = injector.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  const trainingLocationList = [
    {
      trainingLocationName: 'test1'
    },
    {
      trainingLocationName: 'test2'
    },
    {
      trainingLocationName: 'test3'
    }
  ];

  it('getTrainingLocations() should return data', () => {
    service.getTrainingLocations().subscribe(data => {
      expect(data).toEqual(trainingLocationList);
    });

    const req = httpMock.expectOne('http://localhost:3002/training-location');
    expect(req.request.method).toBe('GET');
    req.flush(trainingLocationList);
  });
});
