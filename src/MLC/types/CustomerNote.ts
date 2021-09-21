
import Customer from './Customer';
import LoanRequest from './LoanRequest';
import User from './User';
import Model from './Model';

export default CustomerNote;

export interface CustomerNote extends Model {
    Date?: Date;
    PTPDate?: Date;
    Message?: string;
    CustomerID?: number;
    Customer?: Customer;
    LoanRequestID?: number;
    LoanRequest?: LoanRequest;
    UserID?: number;
    User?: User;
}