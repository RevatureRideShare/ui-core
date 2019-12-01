import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HouseLocation } from '../../models/houselocation.model';
import { environment } from 'src/environments/environment';

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
  readonly port = environment.housingLocationUrl;

  /**
   * The endpoint of the request
   */
  readonly endpoint = environment.housingLocationEndpoint;
  constructor(private http: HttpClient) {}

  /**
   * Gets all housing locations
   */
  getHousingLocations() {
    /**
     * Combine port and endpoint to get the url
     */
    const url = this.port + this.endpoint;

    /**
     * The http request
     */
    return this.http.get<HouseLocation[]>(url);
  }
}
