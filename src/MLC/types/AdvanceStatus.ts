import Advance from './Advance';
import LoanStatusType from './LoanStatusType';
import Model from './Model';
import { User } from './_import';

export default interface AdvanceStatus extends Model  {
    Advance: Advance;
    Type: LoanStatusType;
    User: User;
    Date: Date;
    Note: string;
}