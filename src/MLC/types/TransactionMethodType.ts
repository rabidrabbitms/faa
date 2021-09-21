
import Duration from './duration';
import Model from './Model';

export default TransactionMethodType;

export interface TransactionMethodType extends Model {
    Name?: string;
    Description?: string;
    Cost?: number;
    jsonModelType?: string;

    jsonDuration?: string;
    Duration?: Duration;
    ParentID?: number;
    Parent?: TransactionMethodType;
    Children?: TransactionMethodType[];
}