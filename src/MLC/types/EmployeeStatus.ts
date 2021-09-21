
import Employee from './Employee';
import EmployeeStatusType from './EmployeeStatusType';
import User from './User';
import Model from './Model';

export default EmployeeStatus;

export interface EmployeeStatus extends Model {
    EmployeeID?: number;
    Employee?: Employee;
    TypeID?: number;
    Type?: EmployeeStatusType;
    UserID?: number;
    User?: User;
    Date?: Date;
    Note?: string;
}