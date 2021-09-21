
import Store from './Store';
import CheckStatus from './CheckStatus';
import LoanRequest from './LoanRequest';
import Model from './Model';

export default Check;

export interface Check extends Model {
    Number?: string;
    PayTo?: string;
    Memo?: string;
    Date?: Date;
    Amount?: number;
    AmountToWords?: string;
    StoreID?: number;
    Store?: Store;
    StatusID?: number;
    Status?: CheckStatus;
    LoanRequestID?: number;
    LoanRequest?: LoanRequest;
}