import { Pipe, PipeTransform } from '@angular/core';
import { HouseLocation } from '../models/houselocation.model';

@Pipe({
  name: 'isLocation'
})
/**
 * This impure pipe is reapplied whenever input values change.
 * It takes in an array of housing objects and string to filter by
 */
export class IsLocationPipe implements PipeTransform {
  /**
   * Pipe function to filter out the locations that matched locationName
   * @param values The list of house locations to be filtered
   * @param locationName The training location to filter by
   * @param pure Default to be false, indicates it is a impure pipe
   * @returns The filtered list of house locations
   */
  transform(values: HouseLocation[], locationName: string, pure: false): any {
    return values.filter(
      item => item.trainingLocation.trainingLocationName === locationName
    );
  }
}
