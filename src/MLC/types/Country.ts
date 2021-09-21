
import Geocoding from './geocoding';
import State from './State';
import Model from './Model';

export default Country;

export interface Country extends Model {
    Code?: string;
    Name?: string;
    jsonFundingRules?: string;
    FundingRules?: {}[];
    jsonLoanRules?: string;
    LoanRules?: {}[];
    jsonPaymentCounts?: string;
    PaymentCounts?: {}[];
    jsonNMIModifiers?: string;
    NMIModifiers?: {}[];
    GeocodingID?: number;
    Geocoding?: Geocoding;
    States?: State[];
}