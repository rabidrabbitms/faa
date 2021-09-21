
import Person from './Person';
import DebitCard from './DebitCard';
import User from './User';
import Model from './Model';

export default PersonBeCard;

export interface PersonBeCard extends Model {
    PersonID?: number;
    Person?: Person;
    DebitCardID?: number;
    DebitCard?: DebitCard;
    UserID?: number;
    User?: User;
    Processor?: string;
    Date?: Date;
}