import { Duration } from './_import';
import Model from './Model';

export default FundingRule;

export interface FundingRule extends Model {
    Name?: string;
    Message?: string;
    Methods?;
    Price?: number;
    Amount?: number;
    Duration?: Duration;
    PriceString?: string;
}