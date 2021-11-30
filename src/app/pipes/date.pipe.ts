import {Pipe, PipeTransform} from "@angular/core";


@Pipe({
  name: "utcDate"
})
export class UtcDatePipe implements PipeTransform {

  transform(value: string): any {
    let dateValue: Date;
    let dateWithNoTimezone: Date;
    if (!value) {
      return "";
    }

    dateValue = new Date(value);
    dateWithNoTimezone = new Date(
      dateValue.getUTCFullYear(),
      dateValue.getUTCMonth(),
      dateValue.getUTCDate(),
      dateValue.getUTCHours(),
      dateValue.getUTCMinutes(),
      dateValue.getUTCSeconds()
    );

    return dateWithNoTimezone;
  }
}
