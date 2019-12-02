import { Pipe, PipeTransform } from '@angular/core';
import { HouseLocation } from '../models/houselocation.model';

@Pipe({
  name: 'isLocation'
})
export class IsLocationPipe implements PipeTransform {

  transform(values: HouseLocation[], locationName: string, pure: false): any {
    return values.filter((item) => item.trainingLocation.trainingLocationName == locationName);
  }

}
