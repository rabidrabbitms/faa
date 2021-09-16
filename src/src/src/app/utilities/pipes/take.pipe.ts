import { Pipe } from '@angular/core';
@Pipe({ name: 'take' })
export default class TakePipe {
    transform<T>(values: T[] | undefined, count: number) {
        return values && values.slice(0, count);
    }
}