import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AllDriversService {
  /**
   * Server and port number of the request
   */
  readonly port = 'http://localhost:3001';
  /**
   * The endpoint of the request
   */
  readonly endpoint = '/user?role=DRIVER';
  constructor(private http: HttpClient) {}

  getAllDrivers() {
    const url = this.port + this.endpoint;
    return this.http.get<User[]>(url);
  }
}
