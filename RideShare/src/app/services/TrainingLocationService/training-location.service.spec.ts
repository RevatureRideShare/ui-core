import { TestBed, getTestBed } from '@angular/core/testing';

import { TrainingLocationService } from './training-location.service';
import { TrainingLocation } from '../../models/traininglocation.model';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

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
      trainingLocationID: 1,
      trainingLocationName: 'test1'
    },
    {
      trainingLocationID: 2,
      trainingLocationName: 'test2'
    },
    {
      trainingLocationID: 3,
      trainingLocationName: 'test3'
    }
  ];

  it('getTrainingLocations() should return data', () => {
    service.getTrainingLocations().subscribe(data => {
      expect(data).toEqual(trainingLocationList);
    });

    const req = httpMock.expectOne(
      environment.trainingLocationUrl + environment.trainingLocationEndpoint
    );
    expect(req.request.method).toBe('GET');
    req.flush(trainingLocationList);
  });
});
