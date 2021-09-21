
import Service from './Service';
import ServiceRequest from './ServiceRequest';
import Model from './Model';

export default ServiceMethod;

export interface ServiceMethod extends Model {
    Name?: string;
    Url?: string;
    RequestBody?: string;
    ResponseBody?: string;
    jsonHeaders?: string;
    jsonCredentials?: string;
    jsonVariables?: string;
    Headers?: { [key: string]: string; };
    Credentials?: { [key: string]: string; };
    Variables?: { [key: string]: string; };
    ServiceID?: number;
    Service?: Service;
    Requests?: ServiceRequest[];
}