
import City from './City';
import Geocoding from './geocoding';
import Address from './Address';
import Model from './Model';

export default Zip;

export interface Zip extends Model {
    Code?: string;
    CityID?: number;
    City?: City;
    GeocodingID?: number;
    Geocoding?: Geocoding;
    Addresses?: Address[];  
}