
import LoanRequest from './LoanRequest';
import Customer from './Customer';
import LoanAnalysis from './LoanAnalysis';
import LoanBalances from './LoanBalances';
import LoanStatus from './LoanStatus';
import LoanPaymentSchedule from './LoanPaymentSchedule';
import LoanAutoPay from './LoanAutoPay';
import LoanInterest from './LoanInterest';
import LoanPreComputedInterest from './LoanPreComputedInterest';
import LoanCoupon from './LoanCoupon';
import LoanTransaction from './LoanTransaction';
import LoanType from './LoanType';
import Model from './Model';

export default Loan;

export interface Loan extends Model {
    ID?: number;
    Request?: LoanRequest;
    Date?: Date;
    APR?: number;
    Term?: number;
    CustomerID?: number;
    Customer?: Customer;
    Parent?: Loan;
    Analysis?: LoanAnalysis;
    Balances?: LoanBalances;
    Children?: Loan[];
    Statuses?: LoanStatus[];
    PaymentSchedule?: LoanPaymentSchedule[];
    AutoPays?: LoanAutoPay[];
    LoanInterests?: LoanInterest[];
    LoanPreComputedInterests?: LoanPreComputedInterest[];
    LoanCoupons?: LoanCoupon[];
    ClosedDate?: Date;
    StatusType?: number;
    Transactions?: LoanTransaction[];
    CanRenew?: boolean;
    Status?: LoanStatus;
    NextPaymentSchedule?: LoanPaymentSchedule;
    AutoPay?: LoanAutoPay;
    Coupon?: LoanCoupon;
    Type?: LoanType;
    LastPaymentTransaction?: LoanTransaction;
    PastDue?: LoanPaymentSchedule;
    AmountOwed?: number;
    AmountPaid?: number;
    AmountPastDue?: number;
    DaysPastDue?: number;
    CurrentRefund?: number;
    MaxPaymentDate?: Date;
    PayOffAmount?: number;
    PendingAdvances?: any[];
}