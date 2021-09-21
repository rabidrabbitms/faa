
import Customer from './Customer';
import CustomerOptionType from './CustomerOptionType';
import Model from './Model';

export default CustomerOption;

export interface CustomerOption extends Model {
    CustomerID?: number;
    Customer?: Customer;
    TypeID?: number;
    Type?: CustomerOptionType;
    Value?: string;
}