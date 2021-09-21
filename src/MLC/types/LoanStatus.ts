
import Model from './Model';
import LoanStatusType from './LoanStatusType';
import User from './User';
import CustomerNote from './CustomerNote';
import Loan from './Loan';

export default LoanStatus;

export interface LoanStatus extends Model {
    Type: LoanStatusType;
    Note?: string;
    Loan: Loan;
    User: User;
}