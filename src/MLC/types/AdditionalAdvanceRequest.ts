import Advance from './Advance';
import Customer from './Customer';
import { Loan } from './Loan';
import Model from './Model';
import { Store } from './Store';
import { User } from './User';

export default interface AdditionalAdvanceRequest extends Model  {
    Loan: Loan;
    Advances: Array<Advance>;
    Customer: Customer;
    User: User;
    Store: Store;
    jsonSelections: string;
    jsonOffer: string;
    Amount: number;
    Date: Date;
}