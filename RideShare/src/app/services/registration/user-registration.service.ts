import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

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
  readonly port = 'http://localhost:3002';

  /**
   * Endpoint of the request
   */
  readonly endpoint = '/register-user';

  registerUser(userDto: User, password: string) {
    const url = this.port + this.endpoint;
    return this.http.post(url, { userDto, password });
  }

  constructor(private router: Router, private http: HttpClient) {}
}
