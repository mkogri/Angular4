import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'itemfilter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, args: string[]): any {
  	let filter = args[0];
  	if(filter){
  		filter.toLowerCase();
  	}

    return filter ? value.filter(item=>item.name.toLocaleLowerCase().indexOf(filter) !=-1):value;
   }
}