import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr: any[], searchTerm: any) {
    console.log(searchTerm)

    let filterarray = arr.filter(ele => ele.name.includes(searchTerm));
    console.log(filterarray)

   return filterarray
  }

}
