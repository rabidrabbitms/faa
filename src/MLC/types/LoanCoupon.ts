
import Coupon from './Coupon';
import Loan from './Loan';
import User from './User';
import Model from './Model';

export default LoanCoupon;

export interface LoanCoupon extends Model {
    CouponID?: number;
    Coupon?: Coupon;
    LoanID?: number;
    Loan?: Loan;
    UserID?: number;
    User?: User;
    Date?: Date;
    HasBeenApplied?: boolean;
}