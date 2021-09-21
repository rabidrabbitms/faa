
import Loan from './Loan';
import LoanTransactionType from './LoanTransactionType';
import Store from './Store';
import User from './User';
import Transaction from './Transaction';

export default LoanTransaction;

export interface LoanTransaction extends Transaction {
    ID?: number;
    Principal?: number;
    Interest?: number;
    Fee?: number;
    Balance?: number;
    Cost?: number;
    Total?: number;
    LoanID?: number;
    Loan?: Loan;
    TypeID?: number;
    Type?: LoanTransactionType;
    StoreID?: number;
    Store?: Store;
    UserID?: number;
    User?: User;
}