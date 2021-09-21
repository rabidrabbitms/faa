import Model from './Model';
import AmountRule from './AmountRule';
import Duration from './Duration';
import Rule from './Rule';

export default Option;

export interface Option extends Model {
    Rule?: Rule;
    Duration?: Duration;
    Type?: string;
    Amount?: AmountRule;
}