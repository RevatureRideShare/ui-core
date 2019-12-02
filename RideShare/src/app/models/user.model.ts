import { HouseLocation } from './houselocation.model';
import { Car } from './car.model';

enum RideStatus {INACTIVE, ACTIVE};
enum Role {RIDER, DRIVER};

/**
 * class User contains all of the information regarding a user
 * 
 * Imported by:
 * user-state.model.ts
 */
export class User{
  /**
   * email: string - contains the user's email
   */
  email: string;

  /**
   * firstName: string - contains the user's first name
   */
  firstName: string;

  /**
   * lastName: string - contains the user's last name
   */
  lastName: string;

  /**
   * phoneNumber: string - contains the user's phone number
   */
  phoneNumber: string;

  /**
   * rideStatus: RideStatus - contains the rider status of the user, which is a RideStatus enum
   */
  rideStatus: RideStatus;

  /**
   * role: Role - contains the role status of the user, which is a Role enum
   */
  role: Role;
  
  /**
   * accountStatus: boolean - contains this user's account status, whether is it active or not
   */
  accountStatus: boolean;

  /**
   * houseLocation: HouseLocation - contains the house location information for this user
   */
  houseLocation: HouseLocation;

  /**
   * car: Car - contains the car this user has, if any
   */
  car: Car;

  constructor(
    email: string = "",
    firstName: string = "",
    lastName: string = "",
    phoneNumber: string = "",
    rideStatus: RideStatus = RideStatus.INACTIVE,
    role: Role = Role.RIDER,
    accountStatus: boolean = false,
    houseLocation: HouseLocation = new HouseLocation(),
    car: Car = new Car(),
  ){
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.rideStatus = rideStatus;
    this.role = role;
    this.accountStatus = accountStatus;
    this.houseLocation = houseLocation;
    this.car = car;
  }
}