import Customer from './Customer';
import Employee from './Employee';
import Lead from './Lead';
import User from './User';
import PersonEmail from './PersonEmail';
import PersonPhone from './PersonPhone';
import PersonAddress from './PersonAddress';
import PersonBankAccount from './PersonBankAccount';
import PersonDebitCard from './PersonDebitCard';
import Income from './Income';
import Model from './Model';
import { PersonBeCard } from './_import';

export default Person;

export interface Person extends Model {
    crypSSN?: string;
    hashSSN?: string;
    maskSSN?: string;
    SSN?: string;
    FirstName?: string;
    MiddleName?: string;
    LastName?: string;
    DOB?: Date;
    Customer?: Customer;
    Employee?: Employee;
    Lead?: Lead;
    User?: User;
    Emails?: PersonEmail[];
    Phones?: PersonPhone[];
    Addresses?: PersonAddress[];
    BankAccounts?: PersonBankAccount[];
    DebitCards?: PersonDebitCard[];
    Income?: Income[];
    Email?: PersonEmail;
    PrimaryAddress?: PersonAddress;
    PrimaryPhone?: PersonPhone;
    PrimaryBankAccount?: PersonBankAccount;
    PrimaryDebitCard?: PersonDebitCard;
	PrimaryIncome?: Income;
	PrimaryBeCard?: PersonBeCard;
}