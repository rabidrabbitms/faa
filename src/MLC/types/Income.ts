
import User from './user';
import { PayCycle } from '../PayCycle';
import Person from './person';
import Employment from './employment';
import IncomeType from './IncomeType';
import Model from './Model';

export default Income;

export interface Income extends Model {
    Gross?: number;
    Net?: number;
    jsonCycle?: string;
    isDirectDeposit?: boolean;
    UserID?: number;
    User?: User;
    Date?: Date;
    Primary?: boolean;
    Cycle?: PayCycle;
    PersonID?: number;
    Person?: Person;
    EmploymentID?: number;
    Employment?: Employment;
    TypeID?: number;
    Type?: IncomeType;
    NMI?: number;
    Company?: string;
}