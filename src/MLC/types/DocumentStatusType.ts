
import Model from './Model';

export default interface DocumentStatusType extends Model {
    Name?: string;
    Description?: string;
    ParentID?: number;
    Parent?: DocumentStatusType;
    Children?: DocumentStatusType[];
}