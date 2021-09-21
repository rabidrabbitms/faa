
import Store from './Store';
import Advert from './advert';
import Model from './Model';

export default StoreAdvert;

export interface StoreAdvert extends Model {
    StoreID?: number;
    Store?: Store;
    AdvertID?: number;
    Advert?: Advert;
    Order?: number;
    Date?: Date;
}