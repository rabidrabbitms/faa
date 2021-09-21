
import Loan from './Loan';
import Model from './Model';

export default LoanPaymentSchedule;

export interface LoanPaymentSchedule extends Model {
    LoanID?: number;
    Loan?: Loan;
    DueDate?: Date;
    Amount?: number;
    Date?: Date;
}