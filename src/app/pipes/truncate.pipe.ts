
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(text: string, suffix: string = '...'): string {

    if (text?.length > 25) {
      let truncated: string = text.substring(0, 25) + suffix
      return truncated;
    }

    return text;
  }
}