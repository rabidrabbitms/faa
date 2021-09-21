
import ContractDocument from './ContractDocument';
import ContractStatus from './ContractStatus';
import Document from './Document';
import Model from './Model';

export default interface Contract extends Model {
    ContractDocuments?: ContractDocument[];
    Documents?: Document[];
    Archive?: string;
    Statuses?: ContractStatus[];
    Status?: ContractStatus;
}