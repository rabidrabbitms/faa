
import LoanRequest from './LoanRequest';
import LoanRequestStatusType from './LoanRequestStatusType';
import User from './User';
import Model from './Model';

export default LoanRequestStatus;

export interface LoanRequestStatus extends Model {
    LoanRequestID?: number;
    Request?: LoanRequest;
    TypeID?: number;
    Type?: LoanRequestStatusType;
    UserID?: number;
    User?: User;
    Date?: Date;
}