
import DebitCardTransaction from './DebitCardTransaction';
import PersonDebitCard from './PersonDebitCard';
//import ProcessingStatus from './ProcessingStatus';
import Person from './Person';
import Address from './Address';
import BankAccount from './BankAccount';
import Model from './Model';

export default DebitCard;

export interface DebitCard extends Model {
    CardHolder?: string;
    crypNumber?: string;
    hashNumber?: string;
    maskNumber?: string;
    VaultID?: number;
    DebitCardTransactions?: DebitCardTransaction[];
    PersonDebitCards?: PersonDebitCard[];
    Number?: string;
    ExpirationDate?: Date;
    ExpirationMonth?: string;
    ExpirationYear?: string;
    CVN?: string;
    RecentTransactions?: DebitCardTransaction[];
    Runnable?: boolean;
    //ProcessingStatus?: ProcessingStatus;
    People?: Person[];
    AddressID?: number;
    Address?: Address;
    BankAccountID?: number;
    BankAccount?: BankAccount;
    isBlocked?: boolean;
    isRevoked?: boolean;
    isChargeback?: boolean;
}