import * as moment from 'moment';

export default function withExpiry<T extends object>(
  value: T
): T & { expiry: moment.Moment } {
  return {
    ...(<any>value), // tslint:disable-line:no-any
    expiry: moment().add(1, 'hour')
  };
}
