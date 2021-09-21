
import Phone from './Phone';
import PhoneType from './PhoneType';
import ServiceRequest from './ServiceRequest';
import Model from './Model';

export default PhoneValidation;

export interface PhoneValidation extends Model {
    PhoneID?: number;
    Phone?: Phone;
    Carrier?: string;
    Value?: boolean;
    TypeID?: number;
    Type?: PhoneType;
    ServiceRequestID?: number;
    Request?: ServiceRequest;
    Date?: Date;
    canSMS?: boolean;
}