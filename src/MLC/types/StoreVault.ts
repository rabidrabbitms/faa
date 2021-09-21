
import Drawer from './Drawer';
import Model from './Model';
import { Store } from './Store';
import StoreVaultType from './StoreVaultType';

export default StoreVault;

export interface StoreVault extends Model {
    Amount: number;
    Memo?: string;
    Date: Date;
    Store: Store;
    Type: StoreVaultType;
    Drawers: Drawer;
    Balance: number;
}