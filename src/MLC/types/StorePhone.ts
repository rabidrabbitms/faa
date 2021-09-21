
import Store from './Store';
import Phone from './Phone';
import Model from './Model';

export default StorePhone;

export interface StorePhone extends Model {
    Name?: string;
    Extension?: string;
    Password?: string;
    Token?: string;
    Message?: string;
    RefreshToken?: string;
    TokenDate?: Date;
    StoreID?: number;
    Store?: Store;
    PhoneID?: number;
    Phone?: Phone;
}