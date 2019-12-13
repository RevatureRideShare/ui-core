import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrainingLocation } from '../../models/traininglocation.model';
import { environment } from 'src/environments/environment';

/**
 * TrainingLocationService gets all training locations
 *
 * Imported By:
 * location.effects.ts
 */
@Injectable({
  providedIn: 'root'
})
export class TrainingLocationService {
  /**
   * Server and port number of the request
   */
  readonly port = environment.trainingLocationUrl;

  /**
   * Endpoint of the request
   */
  readonly endpoint = environment.trainingLocationEndpoint;

  constructor(private http: HttpClient) {}

  /**
   *
   */
  getTrainingLocations() {
    /**
     * Combine port and endpoint to get the url
     */
    const url = this.port + this.endpoint;

    /**
     * The http request to get all training locations from server
     */
    return this.http.get<TrainingLocation[]>(url);
  }
}
