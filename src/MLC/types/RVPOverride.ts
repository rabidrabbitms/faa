
import Store from './Store';
import User from './User';
import RVPOverrideStatus from './RVPOverrideStatus';
import Customer from './Customer';
import Issue from './issue';
import Model from './Model';

export default RVPOverride;

export interface RVPOverride extends Model {
    StoreID?: number;
    Store?: Store;
    RequestorID?: number;
    Requestor?: User;
    ApproverID?: number;
    Approver?: User;
    Date?: Date;
    StatusID?: number;
    Status?: RVPOverrideStatus;
    CustomerID?: number;
    Customer?: Customer;
    jsonIssue?: string;
    Issue?: Issue;
}