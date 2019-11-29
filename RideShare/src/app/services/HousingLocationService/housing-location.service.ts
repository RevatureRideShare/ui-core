import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrainingLocation } from '../../models/traininglocation.model';
import { HouseLocation } from '../../models/houselocation.model';

@Injectable({
  providedIn: 'root'
})

/**
 * HousingLocationService gets all housing locations
 *
 * Imported by:
 */
export class HousingLocationService {
  /**
   * Server and port number of the request
   */
  readonly port = 'http://localhost:3003';

  /**
   * The endpoint of the request
   */
  readonly endpoint = '/housing-location';
  constructor(private http: HttpClient) {}

  /**
   * Gets all housing locations
   */
  getHousingLocations() {
    /**Combine port and endpoint to get the url */
    let url = this.port + this.endpoint;

    /**The http request */
    return this.http.get<HouseLocation[]>(url);
  }
}
