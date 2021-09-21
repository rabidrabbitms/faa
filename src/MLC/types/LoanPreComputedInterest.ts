
import Loan from './Loan';
import Model from './Model';

export default LoanPreComputedInterest;

export interface LoanPreComputedInterest extends Model {
    LoanID?: number;
    Loan?: Loan;
    Interest?: number;
    Principal?: number;
    Date?: Date;
}