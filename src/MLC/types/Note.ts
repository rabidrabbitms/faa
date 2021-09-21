
import User from './User';
import Model from './Model';

export default Note;

export interface Note extends Model {
    UserID?: number;
    User?: User;
    Date?: Date;
    Subject?: string;
    Message?: string;
}