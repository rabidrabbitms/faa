
import Transaction from './Transaction';
import TransactionStatusType from './TransactionStatusType';
import Model from './Model';

export default TransactionStatus;

export interface TransactionStatus extends Model {
    TransactionID?: number;
    Transaction?: Transaction;
    TypeID?: number;
    Type?: TransactionStatusType;
    Date?: Date;
    Note?: string;
}