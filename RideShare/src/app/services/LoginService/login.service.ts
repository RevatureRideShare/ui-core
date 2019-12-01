import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

/**
 * LoginService is responsible for making the login request to the server
 *
 * Imported By:
 */
export class LoginService {
  /**
   * Server and port number of the request
   */
  readonly port = environment.userUrl;

  /**
   * Endpoint of the request
   */
  readonly endpoint = environment.loginEndpoint;
  constructor(private http: HttpClient) {}

  /**
   * Will attempt to log in with email and password
   *
   * @param email is the email that the user attempts to log in with
   * @param password is the password that the user attempts to log in with
   * email and password have no function while testing with json server
   */
  login(email: string, password: string) {
    /**
     * Combine port and endpoint to get the url
     */
    const url = this.port + this.endpoint;

    /**
     * The http request
     * currently a get request for testing with a json server
     */

    // return this.http.get<User>(url);
    return this.http.get<User>(url, {observe: 'response'});   // TODO this function should be POST
  }
}
