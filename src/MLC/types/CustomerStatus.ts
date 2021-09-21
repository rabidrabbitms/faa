
import CustomerStatusType from './CustomerStatusType';
import Customer from './Customer';
import User from './User';
import Model from './Model';

export default CustomerStatus;

export interface CustomerStatus extends Model {
    TypeID?: number;
    Type?: CustomerStatusType;
    CustomerID?: number;
    Customer?: Customer;
    UserID?: number;
    User?: User;
    Date?: Date;
    Note?: string;
}