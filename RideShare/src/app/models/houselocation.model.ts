import { TrainingLocation } from './traininglocation.model';

/**
 * class HouseLocation contains any information regarding a known housing location.
 *
 * Imported by:
 * user.model.ts
 * location-state.model.ts
 */
export class HouseLocation {
  /**
   * locationID: number - contains the id for the house location
   */
  locationID: number;

  /**
   * address1: string - contains the primary address of the house location
   */
  address1: string;

  /**
   * address2: string - contains the secondary address of the house location
   */
  address2: string;

  /**
   * city: string - contains the city of the house location
   */
  city: string;

  /**
   * state: string - contains the state of the house location
   */
  state: string;

  /**
   * zipCode: string - contains the zip code of the house location
   */
  zipCode: string;

  /**
   * housingLocationName: string - contains the name of the house location
   */
  housingLocationName: string;

  /**
   * trainingLocation: TrainingLocation - contains the training location
   * this housing location is located in
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
