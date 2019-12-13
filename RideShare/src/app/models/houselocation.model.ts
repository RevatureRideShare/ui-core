import { TrainingLocation } from './traininglocation.model';

/**
 * class HouseLocation contains any information regarding a known housing location.
 *
 * Imported by:
 * user.model.ts
 * location-state.model.ts
 * is-location.pipe.ts
 * registration.component.ts
 * housing-location.service.ts
 * housing-location.service
 * house-location.action
 */
export class HouseLocation {
  /**
   * Contains the id for the house location
   */
  locationID: number;

  /**
   * Contains the primary address of the house location
   */
  address1: string;

  /**
   * Contains the secondary address of the house location
   */
  address2: string;

  /**
   * Contains the city of the house location
   */
  city: string;

  /**
   * Contains the state of the house location
   */
  state: string;

  /**
   * Contains the zip code of the house location
   */
  zipCode: string;

  /**
   * Contains the name of the house location
   */
  housingLocationName: string;

  /**
   * Contains the training location that this housing location is located in
   */
  trainingLocation: TrainingLocation;

  constructor(
    locationID: number = -1,
    address1: string = '',
    address2: string = '',
    city: string = '',
    state: string = '',
    zipCode: string = '',
    housingLocationName: string = '',
    trainingLocation: TrainingLocation = new TrainingLocation()
  ) {
    this.locationID = locationID;
    this.address1 = address1;
    this.address2 = address2;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
    this.housingLocationName = housingLocationName;
    this.trainingLocation = trainingLocation;
  }
}
