import FundingRule from './FundingRule';
import Model from './Model';

export default FundingOption;

export interface FundingOption extends Model {
    Rule?: FundingRule;
    Name?: string;
    Price?: number;
    PriceString?: string;
    Amount?: number;
    ItemType?: string;
    Items?: any[];
}