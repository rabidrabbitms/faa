
import TransactionMethod from './TransactionMethod';
import TransactionStatus from './TransactionStatus';
import Model from './Model';

export default Transaction;

export interface Transaction extends Model {
    Date?: Date;
    Amount?: number;
    Memo?: string;
    Description?: string;
    ParentID?: number;
    Parent?: Transaction;
    MethodID?: number;
    Method?: TransactionMethod;
    ESPTransID?: number;
    ESPTransIDSeq?: number;
    Statuses?: TransactionStatus[];
    Status?: TransactionStatus;
    Children?: Transaction[];
}