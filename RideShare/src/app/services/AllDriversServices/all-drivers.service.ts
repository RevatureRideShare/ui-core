import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { Observable } from 'rxjs';

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

  /**
   * Constructor to inject HttpClient
   * @param {http} http the http object used to send request 
   */
  constructor(private http: HttpClient) {}

  /**
   * The function used to send http request to get list of drivers
   * @returns {Observable<User[]>} the observable type of drivers list
   */
  getAllDrivers() {
    const url = this.port + this.endpoint;
    return this.http.get<User[]>(url);
  }
}
