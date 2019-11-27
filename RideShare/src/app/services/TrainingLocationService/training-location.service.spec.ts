import { TestBed } from '@angular/core/testing';

import { TrainingLocationService } from './training-location.service';

describe('TrainingLocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainingLocationService = TestBed.get(TrainingLocationService);
    expect(service).toBeTruthy();
  });
});
