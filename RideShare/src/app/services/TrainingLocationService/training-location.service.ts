import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrainingLocation } from '../../models/traininglocation.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

/**
 * TrainingLocationService gets all training locations
 *
 * Imported By:
 */
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
   * Gets all training locations
   */
  getTrainingLocations() {
    /**
     * Combine port and endpoint to get the url
     */
    const url = this.port + this.endpoint;

    /**
     * The http request
     */
    return this.http.get<TrainingLocation[]>(url);
  }
}
