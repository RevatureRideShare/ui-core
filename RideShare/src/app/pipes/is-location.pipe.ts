import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isLocation'
})
export class IsLocationPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
