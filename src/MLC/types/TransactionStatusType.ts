
import Model from './Model';

export default TransactionStatusType;

export interface TransactionStatusType extends Model {
    Name?: string;
    Description?: string;
    ParentID?: number;
    Parent?: TransactionStatusType;
    Children?: TransactionStatusType[];
}