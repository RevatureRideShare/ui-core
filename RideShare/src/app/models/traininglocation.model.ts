/**
 * class TrainingLocation contains any information regarding a known training location.
 *
 * Imported by:
 * houseLocation.model.ts
 * location-state.model.ts
 * training-location.services.ts
 * training-location.action.ts
 * location.effects.ts
 * location.reducer.ts
 */
export class TrainingLocation {
  /**
   * Id of the training location
   */
  trainingLocationID: number;

  /**
   * Name of the training location
   */
  trainingLocationName: string;

  constructor(
    trainingLocationID: number = -1,
    trainingLocationName: string = ''
  ) {
    this.trainingLocationID = trainingLocationID;
    this.trainingLocationName = trainingLocationName;
  }
}
