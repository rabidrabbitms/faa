
import Contract from './Contract';
import ContractStatusType from './ContractStatusType';
import Model from './Model';

export default interface ContractStatus extends Model {
    ContractID?: number;
    Contract?: Contract;
    TypeID?: number;
    Type?: ContractStatusType;
    Date?: Date;
    Note?: string;
}