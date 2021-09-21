import BankAccount from './BankAccount';
import Person from './Person';
import User from './User';
import IBVerification from './IBVerification';
import Model from './Model';

export default PersonBankAccount;

export interface PersonBankAccount extends Model {
    Name?: string;
    Primary?: boolean;
    BankAccountID?: number;
    BankAccount?: BankAccount;
    PersonID?: number;
    Person?: Person;
    UserID?: number;
    User?: User;
    Date?: Date;
    IBVerifications?: IBVerification[];
    IBVerificationID?: number;
    IBVerification?: IBVerification;
}