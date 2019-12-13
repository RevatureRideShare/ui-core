/**
 * class Car contains any information regarding a car
 * 
 * Imported by:
 * user.model.ts
 * registration.component.ts
 */
export class Car{
  /**
   * Contains the available seat numbers for this car
   */
  seatNumber: number;

  constructor(
    seatNumber: number = 0,
  ){
    this.seatNumber = seatNumber;
  }
}