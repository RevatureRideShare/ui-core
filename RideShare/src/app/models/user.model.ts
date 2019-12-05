import { HouseLocation } from './houselocation.model';
import { Car } from './car.model';

/**
 * The status of user
 */
export enum RideStatus {
  INACTIVE = 'INACTIVE',
  ACTIVE = 'ACTIVE'
}
/**
 * The role of user
 */
export enum Role {
  ADMIN = 'ADMIN',
  RIDER = 'RIDER',
  DRIVER = 'DRIVER'
}

/**
 * class User contains all of the information regarding a user
 *
 * Imported by:
 * admin.component.ts
 * driver.component.ts
 * home.component.ts
 * user-state.model.ts
 * profile.component.ts
 * registration.component.ts
 * all-drivers.service.ts
 * all-user.service.ts
 * login.service
 * user-registration.service.ts
 * all-user.effects.ts
 * all-user.action.ts
 */
export class User {
  /**
   * Contains the user's email
   */
  email: string;

  /**
   * Contains the user's first name
   */
  firstName: string;

  /**
   * Contains the user's last name
   */
  lastName: string;

  /**
   * Contains the user's phone number
   */
  phoneNumber: string;

  /**
   * Contains the rider status of the user, which is a RideStatus enum
   */
  rideStatus: RideStatus;

  /**
   * Contains the role status of the user, which is a Role enum
   */
  role: Role;

  /**
   * Contains this user's account status, whether is it active or not
   */
  accountStatus: boolean;

  /**
   * Contains the house location information for this user
   */
  houseLocation: HouseLocation;

  /**
   * Contains the car this user has, if any
   */
  carDto: Car;

  constructor(
    email: string = '',
    firstName: string = '',
    lastName: string = '',
    phoneNumber: string = '',
    rideStatus: RideStatus = RideStatus.ACTIVE,
    role: Role = Role.RIDER,
    accountStatus: boolean = false,
    houseLocation: HouseLocation = new HouseLocation(),
    carDto: Car = new Car()
  ) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.rideStatus = rideStatus;
    this.role = role;
    this.accountStatus = accountStatus;
    this.houseLocation = houseLocation;
    this.carDto = carDto;
  }
}
