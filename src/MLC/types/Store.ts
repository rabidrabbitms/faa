
import StoreStatus from './StoreStatus';
import Address from './Address';
import Email from './Email';
import Brand from './Brand';
import District from './District';
import Rule from './Rule';
import PaymentCount from './PaymentCount';
import NMIModifier from './nmimodifier';
import BeCardInventory from './becardinventory';
import StoreVault from './StoreVault';
import StoreVaultTransaction from './StoreVaultTransaction';
import Workstation from './Workstation';
import StorePhone from './StorePhone';
import StoreHour from './StoreHour';
import Model from './Model';

export default Store;

export interface Store extends Model {
    Name?: string;
    Number?: string;
    StatusID?: number;
    Status?: StoreStatus;
    AddressID?: number;
    Address?: Address;
    EmailID?: number;
    Email?: Email;
    BrandID?: number;
    Brand?: Brand;
    DistrictID?: number;
    District?: District;
    LocalTime?: Date;
    jsonFundingRules?: string;
    FundingRules?: Rule[];
    jsonLoanRules?: string;
    LoanRules?: Rule[];
    jsonPaymentCounts?: string;
    PaymentCounts?: PaymentCount[];
    jsonNMIModifiers?: string;
    NMIModifiers?: NMIModifier[];
    BeCardInventories?: BeCardInventory[];
    BeCardInventory?: BeCardInventory;
    Vaults?: StoreVault[];
    Vault?: StoreVault;
    VaultTransactions?: StoreVaultTransaction[];
    Workstations?: Workstation[];
    Phones?: StorePhone[];
    MainPhone?: StorePhone;
    Hours?: StoreHour[];
    Hour?: StoreHour;
}