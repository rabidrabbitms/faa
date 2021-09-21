import Model from './Model';
import { PayCycle } from '../PayCycle';

export default PayCycleMatch;

export interface PayCycleMatch extends Model {
    Dates?: number;
    MatchingDates?: number;
    Percentage?: number;
    Value?: PayCycle;
}
