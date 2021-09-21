
import ServiceRequest from './ServiceRequest';
import Model from './Model';

export default BankLookupStatusType;

export interface BankLookupStatusType extends Model {
    Name?: string;
    Description?: string;
}
export interface BankLookupStatus extends Model {
    TypeID?: number;
    Type?: BankLookupStatusType;
    BankLookupID?: number;
    BankLookup?: BankLookup;
    ServiceRequestID?: number;
    ServiceRequest?: ServiceRequest;
    Date?: Date;
    Node?: string;
}
export interface BankLookup extends Model {
    Statuses?: BankLookupStatus[];
    Status?: BankLookupStatus;
}