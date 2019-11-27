import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
  readonly port = 'localhost:3000';

  /**
   * Endpoint of the request
   */
  readonly endpoint = '/login';
  constructor(private http: HttpClient) {}

  login() {
    /**Combine port and endpoint to get the url */
    let url = this.port + this.endpoint;

    /**
     * The http request
     * currently a get request for testing with a json server
     */
    return this.http.get<Observable<any>>(url);
  }
}
