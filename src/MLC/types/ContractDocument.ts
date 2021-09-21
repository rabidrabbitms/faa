
import Contract from './Contract';
import Document from './Document';
import Model from './Model';

export default interface ContractDocument extends Model {
    ContractID?: number;
    Contract?: Contract;
    DocumentID?: number;
    Document?: Document;
}