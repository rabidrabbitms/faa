
import State from './State';
import Geocoding from './geocoding';
import Zip from './Zip';
import Model from './Model';

export default City;

export interface City extends Model {
    Name?: string;
    StateID?: number;
    State?: State;
    GeocodingID?: number;
    Geocoding?: Geocoding;
    Zips?: Zip[];
}