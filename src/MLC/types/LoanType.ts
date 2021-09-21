
import Model from './Model';

export default LoanType;

export interface LoanType extends Model {
    Code?: string;
    Name?: string;
    Description?: string;
    ParentID?: number;
    Parent?: LoanType;
    Children?: LoanType[];
    FullCode?: string;
}