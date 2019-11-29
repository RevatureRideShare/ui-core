import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllDriversService {
  /**
   * Server and port number of the request
   */
  readonly port = 'http://localhost:3000';
  /**
   * The endpoint of the request
   */
  readonly endpoint = '/user?role=DRIVER';
  constructor() {}
}
