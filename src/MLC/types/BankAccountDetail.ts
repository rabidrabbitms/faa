
import BankAccount from './BankAccount';
import Model from './Model';

export default BankAccountDetail;

export interface BankAccountDetail extends Model {
    ReportKey?: string;
    CustomerKey?: string;
    RequestDate?: Date;
    CompletionDate?: Date;
    CompletionData?: string;
    BankAccountID?: number;
    BankAccount?: BankAccount;
}