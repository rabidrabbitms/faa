import {
    NgbDateParserFormatter,
    NgbDateStruct
} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export default class implements NgbDateParserFormatter {
    parse(value: string): NgbDateStruct {
        const parsed = moment(value, 'MM-DD-YYYY');
        return {
            month: parsed.month() + 1,
            day: parsed.date(),
            year: parsed.year()
        };
    }

    format(date?: NgbDateStruct): string {
        if (!date) return '';
        const { month, day, year } = date;

        return `${String(month).padStart(2, '0')}/${String(day).padStart(
            2,
            '0'
        )}/${String(year)}`;
    }
}
