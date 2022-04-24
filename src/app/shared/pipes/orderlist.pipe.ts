import { Pipe, PipeTransform } from '@angular/core';
import { SongsModel } from '@core/models/songs.model-interface';

@Pipe({
  name: 'orderlist'
})
export class OrderlistPipe implements PipeTransform {

  transform(value: Array<any>, args: string | null = null, sort:string = 'asc'): SongsModel[] {
    try {
      if (args === null) {
        return value;
      } else {
        const tmpList = value.sort((a, b) => {
          if (a[args] < b[args]) {
            return -1;
          }
          else if (a[args] === b[args]) {
            return 0;
          }
          else if (a[args] > b[args]) {
            return 1;
          }
          return 1;
        });
        return (sort === 'asc') ? tmpList: tmpList.reverse();
      }
    } catch (e) {
      console.log('Algo no salio bien');
      return value;
    }
  }
}
