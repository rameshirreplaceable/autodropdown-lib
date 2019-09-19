import { Pipe, PipeTransform } from '@angular/core';

/**
 * Custom Pipes for filter data 
 */
@Pipe({ name: 'filterValue' })
export class FilterValue implements PipeTransform {
    transform(value: any, search: any) {
        let temp = [];
        temp = search != '' && value.filter((val, key) => {
            if (val.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) != -1) {
                return true;
            } else {
                return false;
            }
        }) || value;
        return temp;
    }
}

