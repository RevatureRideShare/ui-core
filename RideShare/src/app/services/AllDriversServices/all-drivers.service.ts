import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AllDriversService {
  /**
   * Server and port number of the request
   */
  readonly port = environment.userUrl;
  /**
   * The endpoint of the request
   */
  readonly endpoint = environment.driverEndpoint;
  constructor(private http: HttpClient) {}

  getAllDrivers() {
    const url = this.port + this.endpoint;
    return this.http.get<User[]>(url);
  }
}
