
import BankAccount from './BankAccount';
import BankAccountVerificationType from './BankAccountVerificationType';
import Model from './Model';

export default BankAccountVerification;

export interface BankAccountVerification extends Model {
    Amount?: number;
    Date?: Date;
    ReferenceID?: string;
    ReferenceData?: string;
    BankAccountID?: number;
    BankAccount?: BankAccount;
    TypeID?: number;
    Type?: BankAccountVerificationType;
}