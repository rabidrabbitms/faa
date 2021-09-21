import Advance from './Advance';
import LoanTransaction from './LoanTransaction';
import Model from './Model';

export default interface AdvanceTransaction extends Model  {
    Advance: Advance;
    LoanTransaction: LoanTransaction;
    Amount: number;
    ToPrincipal: number;
    ToInterest: number;
    ToFee: number;
    Balance: number;
}