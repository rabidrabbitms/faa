
import User from './User';
import Model from './Model';

export default Decryption;

export interface Decryption extends Model {
    UserID?: number;
    User?: User;
    Model?: string;
    Property?: string;
    Date?: Date;
}