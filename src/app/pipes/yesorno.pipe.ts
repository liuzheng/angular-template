import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "yon",
})
export class YesOrNoPipe implements PipeTransform {
  transform(items: any[], args: string): any {
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter(item => item[args]);
  }
}

@Pipe({
  name: "noy",
})
export class NoOrYesPipe implements PipeTransform {
  transform(items: any[], args: string): any {
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter(item => !item[args]);
  }
}
