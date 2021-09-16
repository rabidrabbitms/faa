import { Pipe } from '@angular/core';
@Pipe({ name: 'skip' })
export default class SkipPipe {
    transform<T>(values: T[] | undefined, count: number) {
        return values && values.slice(count);
    }
}