import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

/**
 * Services related to general users
 * 
 * Imported by:
 * all-users.effects.ts
 */
@Injectable({
  providedIn: 'root'
})
export class AllUsersService {
  /**
   * Server and port number of the request
   */
  readonly port = environment.userUrl;
  /**
   * The endpoint of the request
   */
  readonly endpoint = environment.userEndpoint;

  /**
   * Constructor to inject HttpClient
   * @param {HttpClient} http the HttpCLient to send request
   */
  constructor(private http: HttpClient) {}

  /**
   * The function used to get all user in a list
   * @returns {Observalbe<User[]>} return the observable type of all users in a list
   */
  getAllUsers() {
    const url = this.port + this.endpoint;

    /**
     * Send GET http request to get a list of all users
     */
    return this.http.get<User[]>(url);
  }

  /**
   * The function used to update certain user
   * @param {user} user the new info of the user need to be updated
   * @returns {Observalbe<User>} return the observable type of the updated user
   */
  updateUser(user: User) {
    const url = this.port + this.endpoint + '/' + user.email;

    /**
     * Send PUT http request to update the user
     */
    return this.http.put<User>(url, user);
  }
}
