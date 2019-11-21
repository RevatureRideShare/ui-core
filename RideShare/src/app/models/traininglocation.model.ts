/**
 * class TrainingLocation contains any information regarding a known training location.
 * 
 * Imported by:
 * houseLocation.model.ts
 * location-state.model.ts
 */
export class TrainingLocation{
  /**
   * trainingLocationName: string - name of the training location
   */
  trainingLocationName: string;

  constructor(
    trainingLocationName: string = "",
  ){
    this.trainingLocationName = trainingLocationName;
  }
}