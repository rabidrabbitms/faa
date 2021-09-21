
import Report from './Report';
import RoleType from './RoleType';
import Model from './Model';

export default ReportRole;

export interface ReportRole extends Model {
    ReportID?: number;
    Report?: Report;
    RoleTypeID?: number;
    RoleType?: RoleType;
}