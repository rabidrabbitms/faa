
import Loan from './Loan';
import Model from './Model';

export default LoanInterest;

export interface LoanInterest extends Model {
    LoanID?: number;
    Loan?: Loan;
    Amount?: number;
    Date?: Date;
    Principal?: number;
    APR?: number;
}