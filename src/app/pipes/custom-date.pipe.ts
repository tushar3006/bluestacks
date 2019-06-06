import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'customDate',
  pure: false
})
export class CustomDatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return moment().diff(moment(value)) / (1000 * 60 * 60 * 24) < 1
      ? 'NOW'
      : `${parseInt(
          moment().diff(moment(value)) / (1000 * 60 * 60 * 24)
        )} days ago`;
  }
}
