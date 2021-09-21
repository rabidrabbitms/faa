import Model from './Model';
import Loan from './Loan';

export default interface Addendum extends Model {
    Loan: Loan;
    Type: AddendumType;
    Status: AddendumStatus;
    Memo?: any;
    Inputs?: any;
    Data?: any;
    Html?: string;
    Date: Date;
    DaysRemaining: number;
}

export enum AddendumType {
    Deferment
}
export enum AddendumStatus {
    Pending,
    Signed,
    Completed
}