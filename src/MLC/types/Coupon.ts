
import Model from './Model';

export default Coupon;

export interface Coupon extends Model {
    Code?: string;
    Media?: string;
    Source?: string;
    Channel?: string;
    Amount?: number;
    Expiration?: Date;
    Date?: Date;
}