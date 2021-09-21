
import Loan from './Loan';
import Model from './Model';

export default LoanSequence;

export interface LoanSequence extends Model {
    Sequence?: number;
    LoanID?: number;
    Loan?: Loan;
    Date?: Date;
}