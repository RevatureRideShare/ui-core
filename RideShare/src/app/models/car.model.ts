/**
 * class Car contains any information regarding a car
 * 
 * Imported by:
 * user.model.ts
 */
export class Car{
  /**
   * seatNumber: number - contains the available seat numbers for this car
   */
  seatNumber: number;

  constructor(
    seatNumber: number = 0,
  ){
    this.seatNumber = seatNumber;
  }
}