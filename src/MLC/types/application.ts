
import PayCycle from '../PayCycle';
import { RolloverRequestTransaction } from "../RolloverTransaction";
import Model from './Model';
import Reward from './Reward';

export default Application;

export interface Application extends Model {
    CustomerID?: number;
    LoanID?: number;
    HearAboutUs?: string;
    Cycle?: PayCycle;
    Amount?: number;
    Coupon?: string;
    AutoPay?: string;
    CheckNumber?: string;
    CustomerCheckNumber?: string;
    Payment: RolloverRequestTransaction;
    Redemption?: Reward;
}