import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './keg.model';

@Pipe({
  name: 'tap',
  pure: false
})
export class TapPipe implements PipeTransform {

  transform(input: Keg[]) {
    let output = input.sort(function(a, b){
      return a.tap - b.tap;
    });
    return output;
  }

}
