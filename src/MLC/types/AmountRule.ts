import Model from './Model';

export default AmountRule;

export interface AmountRule extends Model {
    Range?: { Minimum: number; Maximum: number; };
    Items?: any[];
}