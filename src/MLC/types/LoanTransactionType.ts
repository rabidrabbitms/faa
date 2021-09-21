
import Model from './Model';

export default LoanTransactionType;

export interface LoanTransactionType extends Model {
    Code?: string;
    Name?: string;
    Description?: string;
}