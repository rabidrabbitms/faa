import AdditionalAdvanceRequest from './AdditionalAdvanceRequest';
import { Loan } from './Loan';
import LoanInterest from './LoanInterest';
import Model from './Model';

export default interface Advance extends Model  {
    Loan: Loan;
    Amount: number;
    Principal: number;
    Interest: number;
    Fees: number;
    APR: number;
    Date: Date;
    ClosedDate?: Date;
    Status: AdvanceStatus;
    StatusType: number;
    Statuses: Array<AdvanceStatus>;
    Transactions: Array<AdvanceTransaction>;
    Interests: Array<LoanInterest>;
    AdditionalAdvanceRequest: AdditionalAdvanceRequest;
}