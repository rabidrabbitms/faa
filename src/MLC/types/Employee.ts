
import Person from './Person';
import PersonAddress from './PersonAddress';
import PersonEmail from './PersonEmail';
import PersonPhone from './PersonPhone';
import PersonDebitCard from './PersonDebitCard';
import PersonBankAccount from './PersonBankAccount';
import Income from './Income';
import EmployeeStatus from './EmployeeStatus';
import Model from './Model';

export default Employee;

export interface Employee extends Model {
    ID?: number;
    Person?: Person;
    SSN?: string;
    FirstName?: string;
    MiddleName?: string;
    LastName?: string;
    DOB?: Date;
    Addresses?: PersonAddress[];
    Emails?: PersonEmail[];
    Phones?: PersonPhone[];
    DebitCards?: PersonDebitCard[];
    BankAccounts?: PersonBankAccount[];
    Income?: Income[];
    Code?: string;
    DOH?: Date;
    DOT?: Date;
    Statuses?: EmployeeStatus[];
    Status?: EmployeeStatus;
}