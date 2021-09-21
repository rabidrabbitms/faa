import { DateCycle } from './Types/DateCycle';
import { DateCycleType } from './DateCycleType';
import { DateCycleReferenceType } from './DateCycleReferenceType';
import DateCycleReference from './Types/DateCycleReference';

export interface PayCycle extends DateCycle {}
export class PayCycle {
    constructor(
        properties: {
            Type?: DateCycleType;
            Frequency?: number;
            References?: DateCycleReference[];
        } = { References: [] }
    ) {
        Object.assign(this, {
            ...properties,
            References: (properties.References || []).map(reference => ({
                ...reference,
                Date: new Date(reference.Date)
            }))
        });
    }

    get Name(): string | undefined {
        if (!this.References || this.References.length === 0) return undefined;

        if (this.References.length > 1)
            this.References.slice().sort(
                (x, y) =>
                    new Date(x.Date).getDate() - new Date(y.Date).getDate()
            );

        let result: string = '';
        switch (this.Type) {
            case DateCycleType.Weekly:
                switch (this.Frequency) {
                    case 1:
                        this.PayType = 'Weekly';
                        result =
                            'Weekly: Every ' +
                            nameOfDay(this.References[0].Date);
                        break;
                    case 2:
                        this.PayType = 'Bi-Weekly';
                        result =
                            'Bi-Weekly: Every Other ' +
                            nameOfDay(this.References[0].Date);
                        break;
                }
                return result;
            case DateCycleType.Monthly:
                switch (this.References.length) {
                    case 1:
                        switch (this.References[0].Type) {
                            case DateCycleReferenceType.NthDay:
                                this.PayType = 'Monthly';
                                result =
                                    'Monthly: The ' +
                                    postfix(
                                        new Date(
                                            this.References[0].Date
                                        ).getDate()
                                    ) +
                                    ' of each month.';
                                break;
                            case DateCycleReferenceType.LastDay:
                                result = 'Monthly: The last day of each month.';
                                break;
                            case DateCycleReferenceType.NthDayOfWeek:
                                return (
                                    'Monthly: The ' +
                                    postfix(
                                        getNthDayOfWeek(this.References[0].Date)
                                    ) +
                                    ' ' +
                                    nameOfDay(this.References[0].Date) +
                                    '.'
                                );
                            default:
                                return 'undefined';
                        }
                        break;
                    case 2:
                        this.PayType = 'Semi-Monthly';
                        result =
                            'Semi-Monthly: The ' +
                            postfix(
                                new Date(this.References[0].Date).getDate()
                            ) +
                            ' and ';
                        switch (this.References[1].Type) {
                            case DateCycleReferenceType.NthDay:
                                result +=
                                    postfix(
                                        new Date(
                                            this.References[1].Date
                                        ).getDate()
                                    ) + '.';
                                break;
                            case DateCycleReferenceType.LastDay:
                                result += ' last day.';
                                break;
                            //case DateCycleReferenceType.NthDayOfWeek:
                            //    result = "The " + this.postfix(DateTime.NthDayOfWeek(this.References[0].Date)) + " and " + this.postfix(DateTime.NthDayOfWeek(this.References[1].Date)) + " " + this.nameOfDay(this.References[0].Date) + " of every month";
                            //    break;
                        }
                }
                return result;
            default:
                return undefined;
        }

        function nameOfDay(date: Date): string {
            const names = [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
            ];
            return names[new Date(date).getDay()];
        }
    }
    generateDays(): Array<number> {
        return this.References.map(reference => reference.Date.getDate()).sort(
            (x, y) => x - y
        );
    }

    range(start: Date, end: Date): Array<Date> {
        let results: Date[] = [];
        start = new Date(start);
        start.setHours(0, 0, 0, 0);
        start.setDate(start.getDate() - 1);

        end = new Date(end);
        end.setHours(0, 0, 0, 0);
        end.setDate(end.getDate() + 1);

        let translated = translate(this, start);
        let result = new Date(start);
        while (
            translated &&
            translated.length &&
            result.getTime() < end.getTime()
        ) {
            translated = translate(this, result);
            result = (translated && translated[0].Date) || new Date();
            if (result.getTime() < end.getTime()) results.push(result);
        }
        return results;
    }

    next(date = new Date(), count = 1): Date[] | undefined {
        let results: Date[] = [];
        date.setHours(0, 0, 0, 0);

        let translated = translate(this, date);
        let result: Date;
        while (translated && translated.length && results.length < count) {
            result = translated[0].Date;
            results.push(result);

            date = new Date(result);
            date.setDate(date.getDate() + 1);
            translated = translate(this, date);
            if (!translated) return undefined;
        }
        return results;
    }
}

export function findPayCycles(d: Date[]): PayCycle[] {
    let dates = d.map(date => new Date(date));
    let payCycles: PayCycle[] = [];
    if (dates.length == 0) return payCycles;

    dates.sort((x, y) => {
        return x.getTime() - y.getTime();
    });

    //Weekly
    payCycles.push(
        new PayCycle({
            Type: DateCycleType.Weekly,
            Frequency: 1,
            References: [{ Date: dates[0] }]
        })
    );

    //Bi-Weekly
    payCycles.push(
        new PayCycle({
            Type: DateCycleType.Weekly,
            Frequency: 2,
            References: [{ Date: dates[0] }]
        })
    );

    //Semi-Monthly
    if (dates.length > 1) {
        //Only display semi-monthly if there are less than 20 days between the two reference dates:
        var diff = Math.ceil(
            Math.abs(dates[0].getTime() - dates[1].getTime()) /
                (1000 * 3600 * 24)
        );
        if (diff < 20) {
            if (isLastDay(dates[0]) || isLastDay(dates[1])) {
                //First reference date is last day of month
                if (isLastDay(dates[0])) {
                    payCycles.push(
                        new PayCycle({
                            Type: DateCycleType.Monthly,
                            Frequency: 1,
                            References: [
                                {
                                    Date: dates[0],
                                    Type: DateCycleReferenceType.LastDay
                                },
                                {
                                    Date: dates[1],
                                    Type: DateCycleReferenceType.NthDay
                                }
                            ]
                        })
                    );
                }
                //Second reference date is last day of month
                if (isLastDay(dates[1])) {
                    payCycles.push(
                        new PayCycle({
                            Type: DateCycleType.Monthly,
                            Frequency: 1,
                            References: [
                                {
                                    Date: dates[0],
                                    Type: DateCycleReferenceType.NthDay
                                },
                                {
                                    Date: dates[1],
                                    Type: DateCycleReferenceType.LastDay
                                }
                            ]
                        })
                    );
                }
            }
            //Reference date isn't 31st, so it could be that it isn't the last day of the month.
            if (dates[0].getDate() != 31 && dates[1].getDate() != 31) {
                payCycles.push(
                    new PayCycle({
                        Type: DateCycleType.Monthly,
                        Frequency: 1,
                        References: [
                            {
                                Date: dates[0],
                                Type: DateCycleReferenceType.NthDay
                            },
                            {
                                Date: dates[1],
                                Type: DateCycleReferenceType.NthDay
                            }
                        ]
                    })
                );
            }
        }
    }

    //Monthly (Any day, except 31st)
    if (dates[0].getDate() != 31) {
        payCycles.push(
            new PayCycle({
                Type: DateCycleType.Monthly,
                Frequency: 1,
                References: [
                    { Date: dates[0], Type: DateCycleReferenceType.NthDay }
                ]
            })
        );
    }

    //Monthly (Last Day)
    if (isLastDay(dates[0])) {
        payCycles.push(
            new PayCycle({
                Type: DateCycleType.Monthly,
                Frequency: 1,
                References: [
                    { Date: dates[0], Type: DateCycleReferenceType.LastDay }
                ]
            })
        );
    }

    //Monthly, X of DayOfWeek (3rd Wednesday):
    if (getNthDayOfWeek(dates[0]) <= 4) {
        payCycles.push(
            new PayCycle({
                Type: DateCycleType.Monthly,
                Frequency: 1,
                References: [
                    {
                        Date: dates[0],
                        Type: DateCycleReferenceType.NthDayOfWeek
                    }
                ]
            })
        );
    }

    const start = new Date(dates[0]);
    start.setDate(start.getDate() - 1);
    const results: PayCycle[] = [];
    for (const payCycle of payCycles) {
        //if (payCycles[i].Type == DateCycleType.Monthly && payCycles[i].References[0].Type == DateCycleReferenceType.NthDayOfWeek) {
        //    let temp: Array<Date> = payCycles[i].Next(start, dates.length);
        //}
        let valid = true;
        const check = payCycle.next(start, dates.length);
        for (let j = 0; j < dates.length; j++) {
            if (check && check[j].getTime() != dates[j].getTime()) {
                valid = false;
                break;
            }
        }

        if (valid) results.push(payCycle);
    }

    return results;
}

function postfix(value: number): string {
    let result: string = 'th';
    const strValue = String(value);
    switch (strValue.length) {
        case 1:
            switch (strValue) {
                case '1':
                    result = 'st';
                    break;
                case '2':
                    result = 'nd';
                    break;
                case '3':
                    result = 'rd';
                    break;
            }
            break;
        case 2:
            switch (strValue[0]) {
                case '1':
                    result = 'th';
                    break;
                default:
                    switch (strValue[1]) {
                        case '1':
                            result = 'st';
                            break;
                        case '2':
                            result = 'nd';
                            break;
                        case '3':
                            result = 'rd';
                            break;
                    }
                    break;
            }
            break;
    }

    return strValue + result;
}

function isLastDay(value: Date): boolean {
    var date: Date = new Date(value);
    date.setDate(date.getDate() + 1);
    return date.getMonth() > value.getMonth();
}

function translate(cycle: PayCycle, date: Date): DateCycleReference[] | null {
    let references: DateCycleReference[] = [];

    for (const reference of cycle.References) {
        references.push({ ...reference, Date: new Date(reference.Date) });
    }

    references.sort(({ Date: x }, { Date: y }) => {
        return Number(x && x.getTime()) - Number(y && y.getTime());
    });

    for (const reference of references) {
        if (!cycle.Frequency) continue;
        let originalReference = {
            ...reference,
            Date: new Date(reference.Date)
        };

        let nthDayOfWeek = getNthDayOfWeek(reference.Date);
        let dayOfWeek = reference.Date.getDay();
        while (reference.Date.getTime() > date.getTime()) {
            switch (cycle.Type) {
                case DateCycleType.Weekly:
                    reference.Date.setDate(
                        reference.Date.getDate() - 7 * cycle.Frequency
                    );
                    break;
                case DateCycleType.Monthly:
                    reference.Date.setDate(1);
                    switch (reference.Type) {
                        case DateCycleReferenceType.NthDay:
                            reference.Date.setMonth(
                                reference.Date.getMonth() - cycle.Frequency
                            );
                            var check = new Date(reference.Date);
                            reference.Date.setDate(
                                originalReference.Date.getDate()
                            );

                            while (
                                reference.Date.getMonth() != check.getMonth()
                            ) {
                                reference.Date.setDate(
                                    reference.Date.getDate() - 1
                                );
                            }
                            break;
                        case DateCycleReferenceType.LastDay:
                            reference.Date.setDate(
                                reference.Date.getDate() - 1
                            );
                            break;
                        case DateCycleReferenceType.NthDayOfWeek:
                            reference.Date.setMonth(
                                reference.Date.getMonth() - 1
                            );
                            while (reference.Date.getDay() != dayOfWeek) {
                                reference.Date.setDate(
                                    reference.Date.getDate() + 1
                                );
                            }
                            reference.Date.setDate(
                                reference.Date.getDate() +
                                    7 * (nthDayOfWeek - 1)
                            );
                            break;
                        case DateCycleReferenceType.LastDayOfWeek:
                            break;
                        default:
                            console.error('Invalid DateCycleReferenceType');
                            reference.Date.setMonth(
                                reference.Date.getMonth() - cycle.Frequency
                            );
                            var check = new Date(reference.Date);
                            reference.Date.setDate(
                                originalReference.Date.getDate()
                            );
                            while (
                                reference.Date.getMonth() != check.getMonth()
                            ) {
                                reference.Date.setDate(
                                    reference.Date.getDate() - 1
                                );
                            }
                            break;
                    }
                    break;
                case DateCycleType.Annually:
                    break;
                default:
                    console.error('Invalid DateCycleType');
                    return null;
            }
        }
        while (reference.Date.getTime() <= date.getTime()) {
            switch (cycle.Type) {
                case DateCycleType.Weekly:
                    reference.Date.setDate(
                        reference.Date.getDate() + 7 * cycle.Frequency
                    );
                    break;
                case DateCycleType.Monthly:
                    reference.Date.setDate(1);
                    switch (reference.Type) {
                        case DateCycleReferenceType.NthDay:
                            reference.Date.setMonth(
                                reference.Date.getMonth() + cycle.Frequency
                            );
                            var check = new Date(reference.Date);
                            reference.Date.setDate(
                                originalReference.Date.getDate()
                            );
                            while (
                                reference.Date.getMonth() != check.getMonth()
                            ) {
                                reference.Date.setDate(
                                    reference.Date.getDate() - 1
                                );
                            }

                            break;
                        case DateCycleReferenceType.LastDay:
                            reference.Date.setMonth(
                                reference.Date.getMonth() + 2
                            );
                            reference.Date.setDate(
                                reference.Date.getDate() - 1
                            );
                            break;
                        case DateCycleReferenceType.NthDayOfWeek:
                            reference.Date.setMonth(
                                reference.Date.getMonth() + 1
                            );
                            while (reference.Date.getDay() != dayOfWeek) {
                                reference.Date.setDate(
                                    reference.Date.getDate() + 1
                                );
                            }
                            reference.Date.setDate(
                                reference.Date.getDate() +
                                    7 * (nthDayOfWeek - 1)
                            );
                            break;
                        case DateCycleReferenceType.LastDayOfWeek:
                            break;
                        default:
                            console.error('Invalid DateCycleReferenceType');
                            reference.Date.setMonth(
                                reference.Date.getMonth() + cycle.Frequency
                            );
                            var check = new Date(reference.Date);
                            reference.Date.setDate(
                                originalReference.Date.getDate()
                            );
                            while (
                                reference.Date.getMonth() != check.getMonth()
                            ) {
                                reference.Date.setDate(
                                    reference.Date.getDate() - 1
                                );
                            }
                            break;
                    }
                    break;
                case DateCycleType.Annually:
                    break;
                default:
                    console.error('Invalid DateCycleType');
                    return null;
            }
        }
    }

    references.sort(({ Date: x }, { Date: y }) => {
        return Number(x && x.getTime()) - Number(y && y.getTime());
    });
    return references;
}

function getNthDayOfWeek(value: Date | string) {
    const date = new Date(value);
    const cursor = new Date(date);
    cursor.setDate(1);
    let result = 0;

    while (cursor.getTime() <= date.getTime()) {
        if (cursor.getDay() == date.getDay()) {
            result++;
        }
        cursor.setDate(cursor.getDate() + 1);
    }
    return result;
}

export default PayCycle;
