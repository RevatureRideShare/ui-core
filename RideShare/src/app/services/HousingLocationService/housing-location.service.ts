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
   * Server and port number of the endpoint
   */
  readonly port = 'localhost:3002';

  /**
   * The endpoint
   */
  readonly endpoint = '/housing-location';
  constructor(private http: HttpClient) {}

  /**
   * Gets all housing locations
   */
  getHousingLocations() {
    let url = this.port + this.endpoint;
    return this.http.get<HouseLocation[]>(url);
  }
}
