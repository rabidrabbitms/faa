
import Model from './Model';

export default interface ContractStatusType extends Model {
    Name?: string;
    Description?: string;
    ParentID?: number;
    Parent?: ContractStatusType;
    Children?: ContractStatusType[];
}