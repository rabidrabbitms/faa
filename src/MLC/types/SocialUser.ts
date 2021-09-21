import SocialNetwork from './SocialNetwork';
import User from './User';
import Model from './Model';

export default SocialUser;
export interface SocialUser extends Model {
    User?: User;
    Network?: SocialNetwork;
    Date?: Date;
    Token?: string;
}