import Model from './model';
import { IssueType } from './IssueType';
import { IssueStatus } from './IssueStatus';

export default Issue;

export interface Issue extends Model {
    Type?: IssueType;
    Status?: IssueStatus;
    Name?: string;
    Description?: string;
    CanOverride?: boolean;
    IsOverridden?: boolean;
    Item?: any;
}