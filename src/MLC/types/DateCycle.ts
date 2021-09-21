import Model from './Model';
import { DateCycleType } from '../DateCycleType';
import DateCycleReference from './DateCycleReference';

export default DateCycle;

export interface DateCycle extends Model {
    Type: DateCycleType;
    Frequency: number;
    References: DateCycleReference[];
    PayType?: string;
}
