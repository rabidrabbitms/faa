
import Store from './Store';
import Model from './Model';

export default StoreHour;

export interface StoreHour extends Model {
    StoreID?: number;
    Store?: Store;
    Day?: string;
    Open?: string;
    Close?: string;
}