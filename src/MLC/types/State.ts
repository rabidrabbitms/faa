
import Country from './Country';
import Rule from './Rule';
import PaymentCount from './PaymentCount';
import NMIModifier from './nmimodifier';
import Geocoding from './geocoding';
import City from './City';
import DocumentTemplate from './DocumentTemplate';
import Model from './Model';

export default State;

export interface State extends Model {
    Code?: string;
    Name?: string;
    CountryID?: number;
    Country?: Country;
    jsonFundingRules?: string;
    FundingRules?: Rule[];
    jsonLoanRules?: string;
    LoanRules?: Rule[];
    jsonPaymentCounts?: string;
    PaymentCounts?: PaymentCount[];
    jsonNMIModifiers?: string;
    NMIModifiers?: NMIModifier[];
    GeocodingID?: number;
    Geocoding?: Geocoding;
    Cities?: City[];
    DocumentTemplates?: DocumentTemplate[];
}