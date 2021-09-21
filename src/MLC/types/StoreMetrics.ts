
import Store from './Store';
import LoanType from './LoanType';
import Model from './Model';

export default StoreMetrics;

export interface StoreMetrics extends Model {
    Date?: Date;
    StoreID?: number;
    Store?: Store;
    LoanTypeID?: number;
    LoanType?: LoanType;
    AR?: number;
    UCC?: number;
    MTDBD?: number;
}