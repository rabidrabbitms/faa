
import Document from './Document';
import DocumentStatusType from './DocumentStatusType';
import Model from './Model';

export default interface DocumentStatus extends Model {
    DocumentID?: number;
    Document?: Document;
    TypeID?: number;
    Type?: DocumentStatusType;
    Date?: Date;
    Note?: string;
}