import Model from "./Model";

export default Geocoding;

export interface Geocoding  extends Model{
    Status?: string;
    Latitude?: number;
    Logitude?: number;
}