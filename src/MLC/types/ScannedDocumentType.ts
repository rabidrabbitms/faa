
import Model from './Model';

export default interface ScannedDocumentType extends Model {
    Name?: string;
    Description?: string;
    Group?: string;
    isActive?: boolean;
    Date?: Date;
    ParentID?: number;
    Parent?: ScannedDocumentType;
    GetScannedDocumentTypes?: ScannedDocumentType[];
}