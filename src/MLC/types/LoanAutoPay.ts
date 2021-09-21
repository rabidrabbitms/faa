
import Loan from './Loan';
import LoanAutoPayType from './LoanAutoPayType';
import User from './User';
import Model from './Model';

export default LoanAutoPay;

export interface LoanAutoPay extends Model {
    LoanID?: number;
    Loan?: Loan;
    TypeID?: number;
    Type?: LoanAutoPayType;
    UserID?: number;
    User?: User;
    Date?: Date;
}