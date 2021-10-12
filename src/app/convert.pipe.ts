import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: string, unit: string = "km"): any {
   if (!value) {
     return null;
   }

   switch (unit) {
    case "km":
      return +value * 1.60934;
    case "m":
      return +value * 1.60934 * 1000;
   }

  }

}
