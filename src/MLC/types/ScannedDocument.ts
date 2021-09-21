
import User from './User';
import Store from './Store';
import Person from './Person';
import ScannedDocumentStatus from './ScannedDocumentStatus';
import ScannedDocumentType from './ScannedDocumentType';
import Model from './Model';
import ScannedDocumentBlob from './ScannedDocumentBlob';

export default ScannedDocument;

export interface ScannedDocument extends Model {
    UserID?: number;
    User?: User;
    StoreID?: number;
    Store?: Store;
    OwnerID?: number;
    Owner?: Person;
    StatusID?: number;
    Status?: ScannedDocumentStatus;
    TypeID?: number;
    Type?: ScannedDocumentType;
    Date?: Date;
    FileName?: string;
    Blob?: ScannedDocumentBlob;
}