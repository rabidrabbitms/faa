import Zip from './Zip';
import State from './State';
import Geocoding from './geocoding';
import Model from './Model';

export default Address;

export interface Address extends Model {
    Street?: string;
    Subpremise?: string;
    ZipID?: number;
    Zip?: Zip;
    AlternateStateID?: number;
    AlternateState?: State;
    State?: State;
    GeocodingID?: number;
    Geocoding?: Geocoding;
}