
import Store from './Store';
import StorePhone from './StorePhone';
import Model from './Model';

export default Workstation;

export interface Workstation extends Model {
    Name?: string;
    StoreID?: number;
    Store?: Store;
    PhoneID?: number;
    Phone?: StorePhone;
}