import Model from './Model';
import AmountRule from './AmountRule';
import { Duration } from './Duration';
import { PayCycle } from '../PayCycle';

export default interface Rule extends Model {
    Type?: string;
    APR?: number;
    DIY?: number;
    Data?: any;
    Contract?: string[];
    Requirement?: string;
    Amount?: AmountRule;
    Durations?: Duration;
    GracePeriod?: Duration;
    MaxPeriod?: Duration;
    PaymentCycle?: PayCycle;
}
