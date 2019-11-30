import { TestBed } from '@angular/core/testing';

import { AllDriversService } from './all-drivers.service';

describe('AllDriversService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllDriversService = TestBed.get(AllDriversService);
    expect(service).toBeTruthy();
  });
});
