import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AllUsersService {
  /**
   * Server and port number of the request
   */
  readonly port = 'http://localhost:3001';
  /**
   * The endpoint of the request
   */
  readonly endpoint = '/user';
  constructor(private http: HttpClient) {}
  /**
   * Gets all users
   */
  getAllUsers() {
    const url = this.port + this.endpoint;

    /**
     * Send GET http request to get a list of all users
     */
    return this.http.get<User[]>(url);
  }

  /**
   * Update certain user
   */
  updateUser(user: User) {
    const url = this.port + this.endpoint+'/'+user.email;

    /**
     * Send PUT http request to update the user
     */
    return this.http.put<User>(url, user);
  }
}
