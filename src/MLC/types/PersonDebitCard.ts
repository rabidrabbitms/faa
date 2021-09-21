
import Person from './Person';
import DebitCard from './DebitCard';
import User from './User';
import Model from './Model';

export default PersonDebitCard;

export interface PersonDebitCard extends Model {
    PersonID?: number;
    Person?: Person;
    DebitCardID?: number;
    DebitCard?: DebitCard;
    UserID?: number;
    User?: User;
    Primary?: boolean;
    Name?: string;
    Date?: Date;
}