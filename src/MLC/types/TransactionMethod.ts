
import TransactionMethodType from './TransactionMethodType';
import Model from './Model';

export default TransactionMethod;

export interface TransactionMethod extends Model {
    TypeID?: number;
    Type?: TransactionMethodType;
    TransactionID?: number;
    jsonItem?: string;
    Item?: { [key: string]: any[]; };
}