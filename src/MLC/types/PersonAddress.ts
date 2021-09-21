
import Person from './Person';
import Address from './Address';
import User from './User';
import Model from './Model';

export default PersonAddress;

export interface PersonAddress extends Model {
    Name?: string;
    PersonID?: number;
    Person?: Person;
    AddressID?: number;
    Address?: Address;
    UserID?: number;
    User?: User;
    Date?: Date;
}