
import BankAccountType from './BankAccountType';
import Bank from './Bank';
import BankAccountDetail from './BankAccountDetail';
import BankAccountVerification from './BankAccountVerification';
import PersonBankAccount from './PersonBankAccount';
import Model from './Model';

export default BankAccount;

export interface BankAccount extends Model {
    crypNumber?: string;
    hashNumber?: string;
    maskNumber?: string;
    Number?: string;
    TypeID?: number;
    Type?: BankAccountType;
    BankID?: number;
    Bank?: Bank;
    Details?: BankAccountDetail[];
    Verifications?: BankAccountVerification[];
    Verification?: BankAccountVerification;
    People?: PersonBankAccount[];
    isBlocked?: boolean;
    isRevoked?: boolean;
}