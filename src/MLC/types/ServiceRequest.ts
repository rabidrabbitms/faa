
import ServiceMethod from './ServiceMethod';
import ServiceResponse from './ServiceResponse';
import Model from './Model';

export default ServiceRequest;

export interface ServiceRequest extends Model { 
    Time?: Date;
    Url?: string;
    Body?: string;
    jsonHeaders?: string;
    jsonCredentials?: string;
    jsonVariables?: string;
    ESPRequestID?: string;
    Headers?: { [key: string]: string; };
    Credentials?: { [key: string]: string; };
    Variables?: { [key: string]: string; };
    MethodID?: number;
    Method?: ServiceMethod;
    Response?: ServiceResponse;
}