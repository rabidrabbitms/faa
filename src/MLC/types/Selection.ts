import Model from './Model';
import { PayCycle } from '../PayCycle';
import Duration from './Duration';
import Coupon from './Coupon';

export default Selection;

export interface Selection extends Model {
    Type?: string;
    Amount?: number;
    Cost?: number;
    Duration?: Duration;
    PaymentCycle?: PayCycle;
    FutureDate?: Date;
    Coupon?: Coupon;
}
