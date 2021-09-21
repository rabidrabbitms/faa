
import Store from './Store';
import StoreGoalType from './StoreGoalType';
import Model from './Model';

export default StoreGoal;

export interface StoreGoal extends Model {
    Date?: Date;
    StoreID?: number;
    Store?: Store;
    StoreGoalTypeID?: number;
    Type?: StoreGoalType;
    Value?: number;
}