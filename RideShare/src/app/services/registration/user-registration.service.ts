import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { environment } from 'src/environments/environment';

/**
 * UserRegistrationService is responsible for making the register request to the server
 */
@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  /**
   * Server and port number of the request
   */
  readonly port = environment.userUrl;

  /**
   * Endpoint of the request
   */
  readonly endpoint = environment.userEndpoint;

  /**
   * registerUser() send new user object and its password to server for registration
   * @param {User} user The user object need to be registered
   * @param {string} password The password of the new user
   */
  registerUser(user: User, password: string) {
    const url = this.port + this.endpoint;
    return this.http.post<HttpResponse<any>>(
      url,
      { userDto: user, password: password },
      { observe: 'response' }
    );
  }

  constructor(private router: Router, private http: HttpClient) {}
}
