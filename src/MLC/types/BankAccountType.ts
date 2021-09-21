import Model from './model';

export default BankAccountType;

export interface BankAccountType extends Model {
    Name?: string;
    Description?: string;
}