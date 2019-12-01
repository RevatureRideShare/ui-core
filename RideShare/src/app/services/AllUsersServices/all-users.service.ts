import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

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
  constructor(private http: HttpClient) {}
  /**
   * Gets all users
   */
  getAllUsers() {
    const url = this.port + this.endpoint;

    /**
     * The send GET http request to get a list of all users
     */
    return this.http.get<User[]>(url);
  }
}
