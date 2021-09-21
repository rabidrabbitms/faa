
import Person from './Person';
import Email from './Email';
import User from './User';
import Model from './Model';

export default PersonEmail;

export interface PersonEmail extends Model {
    PersonID?: number;
    Person?: Person;
    EmailID?: number;
    Email?: Email;
    Primary?: boolean;
    Name?: string;
    UserID?: number;
    User?: User;
    Date?: Date;
}