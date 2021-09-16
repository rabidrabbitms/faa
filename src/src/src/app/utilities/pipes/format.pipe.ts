import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'format' })
export default class FormatPipe implements PipeTransform {
    transform(value: string | Date, kind: string): string {
        let month: string; let day: string; let d: Date;
        switch (value && kind) {
            case "phone":
                return typeof value === 'string' && `(${value.substring(0, 3)}) ${value.substring(3, 6)}-${value.substring(6, 10)}` || '';
            case "date":
                const dateString = typeof value === 'string' ? value : value.toISOString();
                //Handle Zero Time Dates differently than "real" dates:
                if (dateString.split('T').length > 1) {
                    if (dateString.split('T')[1].replace('Z', '').replace('-05:00', '') === "00:00:00" || dateString.split('T')[1].replace('Z', '').replace('-05:00', '') === "02:00:00") {
                        const result: string[] = dateString.split('T')[0].split('-');
                        return `${paddingZero(result[1])}/${paddingZero(result[2])}/${result[0]}`;
                    }
                }

                d = new Date(dateString);
                d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
                month = paddingZero((d.getMonth() + 1).toString());
                day = paddingZero(d.getDate().toString());

                return `${month}/${day}/${d.getFullYear()}`;
            case "dateTime":
                const dateTimeString = typeof value === 'string' ? value : value.toISOString();
                //Handle Zero Time Dates differently than "real" dates:
                if (dateTimeString.split('T').length > 1) {
                    if (dateTimeString.split('T')[1].replace('Z', '').replace('-05:00', '') === "00:00:00" || dateTimeString.split('T')[1].replace('Z', '').replace('-05:00', '') === "02:00:00") {
                        const result: string[] = dateTimeString.split('T')[0].split('-');
                        return `${paddingZero(result[1])}/${paddingZero(result[2])}/${result[0]}`;
                    }
                }

                d = new Date(dateTimeString);
                d.setMinutes(d.getMinutes() - d.getTimezoneOffset());

                month = paddingZero((d.getMonth() + 1).toString());
                day = paddingZero(d.getDate().toString());

                let clock = "am";
                let hours = d.getHours();
                if (hours >= 12) {
                    clock = "pm";
                    if (hours > 12)
                        hours = hours - 12;
                }
                const minutes = paddingZero(d.getMinutes().toString());

                return `${month}/${day}/${d.getFullYear()}  -  ${hours}:${minutes} ${clock}`;
            case "shortDate":
                const shortDateString = typeof value === 'string' ? value : value.toISOString();
                //Handle Zero Time Dates differently than "real" dates:
                if (shortDateString.split('T')[1].replace('Z', '').replace('-05:00', '') === "00:00:00" || shortDateString.split('T')[1].replace('Z', '').replace('-05:00', '') === "02:00:00") {
                    const result = shortDateString.split('T')[0].split('-');
                    return `${result[1]}/${result[2]}`;
                }

                d = new Date(shortDateString);
                d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
                return (d.getMonth() + 1) + "/" + d.getDate();
            case "time":
                value = new Date(value).toISOString();
                const date = new Date(value);
                const time = date.toTimeString().split(" ");
                return time[0];
            case "last4":
                if (typeof value === 'string' && value.length > 4)
                    return value.substring(value.length - 4);
                return typeof value === 'string' && value || '';
            case "capitalize":
                return typeof value === 'string' && (value[0].toUpperCase() + value.substr(1).toLowerCase()) || '';
            default:
                return value && value.toString();
        }
    }
}
function paddingZero(value: string) {
    if (value.length < 2)
        return "0" + value;
    return value;
}