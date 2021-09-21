
import Phone from './Phone';
import Address from './Address';
import Model from './Model';

export default Brand;

export interface Brand extends Model {
    Code?: string;
    Name?: string;
    ShortName?: string;
    FullName?: string;
    Website?: string;
    iOSURL?: string;
    AndroidURL?: string;
    PhoneID?: number;
    Phone?: Phone;
    AddressID?: number;
    Address?: Address;
    GroupCode?: string;
    AccountGroup?: string;
    MarketingGroup?: string;
}