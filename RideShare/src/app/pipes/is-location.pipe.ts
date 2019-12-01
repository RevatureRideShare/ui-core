import { Pipe, PipeTransform } from '@angular/core';
import { HouseLocation } from '../models/houselocation.model';

@Pipe({
  name: 'isLocation'
})
/* this impure pipe is reapllied whenever input values change. It takes in an array of husing objects
and string to filter by */
export class IsLocationPipe implements PipeTransform {

  transform(values: HouseLocation[], locationName: string, pure: false): any {
    return values.filter((item) => item.trainingLocation.trainingLocationName == locationName);
  }

}
