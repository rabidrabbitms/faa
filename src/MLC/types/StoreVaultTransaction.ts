
import StoreVaultTransactionType from './StoreVaultTransactionType';
import User from './User';
import Store from './Store';
import Model from './Model';

export default StoreVaultTransaction;

export interface StoreVaultTransaction extends Model {
    Amount?: number;
    TypeID?: number;
    Type?: StoreVaultTransactionType;
    UserID?: number;
    User?: User;
    StoreID?: number;
    Store?: Store;
    Date?: Date;
    Memo?: string;
    jsonItem?: string;
    Item?: { [key: string]: any[]; };
}