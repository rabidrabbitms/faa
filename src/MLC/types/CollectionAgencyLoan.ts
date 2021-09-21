
import Customer from './Customer';
import Loan from './Loan';
import CollectionAgency from './CollectionAgency';
import Model from './Model';

export default CollectionAgencyLoan;

export interface CollectionAgencyLoan extends Model {
    CustomerID?: number;
    Customer?: Customer;
    LoanID?: number;
    Loan?: Loan;
    Balance?: number;
    AgencyID?: number;
    CollectionAgency?: CollectionAgency;
    isActive?: boolean;
    Date?: Date;
    WithdrawDate?: Date;
}