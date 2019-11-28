import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrainingLocation } from '../../models/traininglocation.model';

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
   * Server and port number
   */
  readonly port = 'http://localhost:3002';

  /**
   * Endpoint
   */
  readonly endpoint = '/training-location';
  constructor(private http: HttpClient) {}

  /**
   * Gets all training locations
   */
  getTrainingLocations() {
    let url = this.port + this.endpoint;
    return this.http.get<TrainingLocation[]>(url);
  }
}
