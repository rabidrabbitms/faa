
import ServiceRequest from './ServiceRequest';
import Model from './Model';

export default ServiceResponse;

export interface ServiceResponse extends Model {
    ID?: number;
    Request?: ServiceRequest;
    Time?: Date;
    Body?: string;
}