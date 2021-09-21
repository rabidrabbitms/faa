import DenialReason from './DenialReason';
import LoanRequest from './LoanRequest';
import User from './User';
import Model from './Model';
import Customer from './Customer';

export default AdverseAction;

export interface AdverseAction extends Model {
    ReasonID?: number;
    Reason?: DenialReason;
    CustomerID?: number;
    Customer?: Customer;
    LoanRequestID?: number;
    LoanRequest?: LoanRequest;
    UserID?: number;
    User?: User;
    CustomerInitiated?: boolean;
    Date?: Date;
}