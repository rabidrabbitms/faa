
import Person from './Person';
import Phone from './Phone';
import PersonPhoneStatus from './PersonPhoneStatus';
import User from './User';
import Model from './Model';

export default interface PersonPhone extends Model {
    Name?: string;
    Extension?: string;
    Primary?: boolean;
    isVerified?: boolean;
    PersonID?: number;
    Person?: Person;
    PhoneID?: number;
    Phone?: Phone;
    StatusID?: number;
    Status?: PersonPhoneStatus;
    UserID?: number;
    User?: User;
    Date?: Date;
}