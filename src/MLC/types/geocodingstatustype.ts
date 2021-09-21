
import ServiceRequest from './ServiceRequest';
import ServiceResponse from './ServiceResponse';
import Model from './Model';

export default GeocodingStatusType;

export interface GeocodingStatusType extends Model {
    Name?: string;
    Description?: string;
    ParentID?: number;
    Parent?: GeocodingStatusType;
    Children?: GeocodingStatusType[];
}
export interface GeocodingStatus extends Model {
    Date?: Date;
    Message?: string;
    ServiceRequestID?: number;
    ServiceRequest?: ServiceRequest;
    ServiceResponse?: ServiceResponse;
    GeocodingID?: number;
    Geocoding?: Geocoding;
    TypeID?: number;
    Type?: GeocodingStatusType;
}
export interface Geocoding extends Model {
    Latitude?: number;
    Longitude?: number;
    Statuses?: GeocodingStatus[];
    Status?: GeocodingStatus;
}