import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TrainingLocation } from "../../models/traininglocation.model";

@Injectable({
  providedIn: "root"
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
  readonly port = "http://localhost:3002";

  /**
   * Endpoint of the request
   */
  readonly endpoint = "/training-location";

  constructor(private http: HttpClient) {}

  /**
   * Gets all training locations
   */
  getTrainingLocations() {
    /**Combine port and endpoint to get the url */
    let url = this.port + this.endpoint;

    /**The http request */
    return this.http.get<TrainingLocation[]>(url);
  }
}
