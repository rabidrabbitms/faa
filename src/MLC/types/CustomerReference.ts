
import CustomerReferenceType from './CustomerReferenceType';
import Customer from './Customer';
import Person from './Person';
import User from './User';
import Model from './Model';

export default CustomerReference;

export interface CustomerReference extends Model {
    TypeID?: number;
    Type?: CustomerReferenceType;
    CustomerID?: number;
    Customer?: Customer;
    PersonID?: number;
    Person?: Person;
    UserID?: number;
    User?: User;
    Date?: Date;
}