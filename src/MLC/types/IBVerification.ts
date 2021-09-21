
import PersonBankAccount from './PersonBankAccount';
import Model from './Model';
import { IBVerificationStatus } from './IBVerificationStatus';

export default IBVerification;



export interface IBVerification extends Model {
    PersonBankAccountID?: number;
    PersonBankAccount?: PersonBankAccount;
    ReferenceID?: string;
    Date?: Date;
    ReferenceData?: string;
    LoginUrl?: string;
    ReportUrl?: string;
    RedirectUrl?: string;
    Status?: IBVerificationStatus;
}