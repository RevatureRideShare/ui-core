import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  user: User;
  password: string;
  response: any;
  /**
   * Server and port number of the request
   */
  readonly port = environment.userUrl;

  /**
   * Endpoint of the request
   */
  readonly endpoint = environment.userEndpoint;

  registerUser(user: User, password: string) {
    const url = this.port + this.endpoint;
    return this.http.post(url, { user, password });
  }

  constructor(private router: Router, private http: HttpClient) {}
}
