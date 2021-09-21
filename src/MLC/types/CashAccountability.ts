
import StoreVault from './StoreVault';
import User from './User';
import Model from './Model';

export default CashAccountability;

export interface CashAccountability extends Model {
    Pennies?: number;
    Nickels?: number;
    Dimes?: number;
    Quarters?: number;
    Dollars?: number;
    Fives?: number;
    Tens?: number;
    Twenties?: number;
    Fifties?: number;
    Hundreds?: number;
    MoneyOrders?: number;
    MoneyOrdersAmount?: number;
    StoreVaultID?: number;
    StoreVault?: StoreVault;
    UserID?: number;
    User?: User;
}