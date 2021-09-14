import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'filter' })
export default class FilterPipe implements PipeTransform {
    transform<T>(items: Array<T>, predicate: (value: T) => boolean, negate: boolean): Array<T>;
    transform<T>(items: Array<T>, properties: Partial<T>, negate: boolean): Array<T>;
    transform<T>(items: Array<T>, predicateOrProperties: ((value: T) => boolean) | Partial<T>, negate = false) {
        const predicate = typeof predicateOrProperties === 'function'
            ? predicateOrProperties
            : (item: T) => {
                if (!negate)
                    return Object.entries(predicateOrProperties).every(([key, value]) => item[key] === value);
                else
                    return Object.entries(predicateOrProperties).every(([key, value]) => item[key] !== value);
            };
        return items && items.filter(predicate);
    }
}