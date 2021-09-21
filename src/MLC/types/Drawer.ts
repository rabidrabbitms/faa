
import Model from './Model';
import Store from './Store';
import StoreVaultType from './StoreVaultType';
import User from './User';

export default Drawer;

export interface Drawer extends Model {
    Amount?: number;
    UserID?: number;
    User?: User;
}
export interface StoreVault extends Model {
    Amount?: number;
    Memo?: string;
    Date?: Date;
    StoreID?: number;
    Store?: Store;
    TypeID?: number;
    Type?: StoreVaultType;
    Drawers?: Drawer[];
    Balance?: number;
}