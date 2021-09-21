
import Loan from './Loan';
import Model from './Model';

export default LoanBalances;

export interface LoanBalances extends Model {
    ID?: number;
    Principal?: number;
    Interest?: number;
    Fee?: number;
    Cost?: number;
    Total?: number;
}