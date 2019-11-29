import { TestBed, getTestBed } from "@angular/core/testing";

import { HousingLocationService } from "./housing-location.service";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

describe("HousingLocationService", () => {
  let injector: TestBed;
  let service: HousingLocationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HousingLocationService],
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    service = injector.get(HousingLocationService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  const housingLocationList = [
    {
      address1: "test",
      address2: "test",
      city: "test",
      state: "test",
      zipCode: "test",
      housingLocationName: "IQ",
      trainingLocation: { trainingLocationName: "USF" }
    },
    {
      address1: "test2",
      address2: "test2",
      city: "test2",
      state: "test2",
      zipCode: "test2",
      housingLocationName: "IQ",
      trainingLocation: { trainingLocationName: "USF" }
    },
    {
      address1: "test3",
      address2: "test3",
      city: "test3",
      state: "test3",
      zipCode: "test3",
      housingLocationName: "IQ",
      trainingLocation: { trainingLocationName: "USF" }
    }
  ];

  it("getHousingLocations() should return data", () => {
    service.getHousingLocations().subscribe(data => {
      expect(data).toEqual(housingLocationList);
    });

    const req = httpMock.expectOne("http://localhost:3003/housing-location");
    expect(req.request.method).toBe("GET");
    req.flush(housingLocationList);
  });
});
