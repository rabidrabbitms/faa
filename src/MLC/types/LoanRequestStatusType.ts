
import Model from './Model';

export default LoanRequestStatusType;

export interface LoanRequestStatusType extends Model {
    Name?: string;
    Description?: string;
    ParentID?: number;
    Parent?: LoanRequestStatusType;
    Children?: LoanRequestStatusType[];
}