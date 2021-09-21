import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

const subject = new Subject();
@Injectable({ providedIn: 'root' })
export default class {
    get subject() {
        return subject;
    }
}
