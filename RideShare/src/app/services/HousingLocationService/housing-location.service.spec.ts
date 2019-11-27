import { TestBed } from '@angular/core/testing';

import { HousingLocationService } from './housing-location.service';

describe('HousingLocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HousingLocationService = TestBed.get(HousingLocationService);
    expect(service).toBeTruthy();
  });
});
