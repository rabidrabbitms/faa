import Model from './Model';
import FundingRule from './FundingRule';

export default Selection;

export interface Selection extends Model {
    Rule: FundingRule;
    Name?: string;
    Amount?: number;
    Item?: any;
    AmountToWords?: string;
}
