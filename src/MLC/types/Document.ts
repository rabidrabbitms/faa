
import DocumentStatus from './DocumentStatus';
import DocumentTemplate from './DocumentTemplate';
import Model from './Model';
import Signature from './signature';

export default interface Document extends Model {
    TemplateID?: number;
    Template?: DocumentTemplate;
    Html?: string;
    jsonSignatures?: string;
    Signatures?: { [key: string]: Signature; };
    Statuses?: DocumentStatus[];
    Status?: DocumentStatus;
}