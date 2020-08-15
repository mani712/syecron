import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchValue: string): any[] {

    if (!searchValue || !items) {
      return items;
    }

    return items.filter((item) => {
      return item.title
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase());
    });
  }
}
