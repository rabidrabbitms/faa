import Model from './Model';
import Option from './Option';
import Selection from './Selection';
import { PayCycle } from '../PayCycle';

export default Offer;

export interface Offer extends Model {
    Option?: Option;
    Selection?: Selection;
    PaymentCycle?: PayCycle;
    Date?: Date;
    FundingDate?: Date;
    ExpirationDate?: Date;
    APR?: number;
    Fees?: number;
    Payments?: any[];
    Calculation?: any;
    Cost?: number;
    Total?: number;
}