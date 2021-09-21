
import Store from './Store';
import Role from './Role';
import Model from './Model';

export default StoreRole;

export interface StoreRole extends Model {
    StoreID?: number;
    Store?: Store;
    RoleID?: number;
    Role?: Role;
}