
import Address from './Address';
import Phone from './Phone';
import BankAccount from './BankAccount';
import Model from './Model';

export default Bank;

export interface Bank extends Model {
    Number?: string;
    Name?: string;
    AddressID?: number;
    Address?: Address;
    PhoneID?: number;
    Phone?: Phone;
    Valid?: boolean;
    Accounts?: BankAccount[];
}