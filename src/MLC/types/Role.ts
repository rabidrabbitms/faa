
import RoleType from './RoleType';
import User from './User';
import StoreRole from './StoreRole';
import Model from './Model';

export default Role;

export interface Role extends Model {
    TypeID?: number;
    Type?: RoleType;
    UserID?: number;
    User?: User;
    StoreRoles?: StoreRole[];
}