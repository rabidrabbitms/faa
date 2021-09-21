
import Model from './Model';

export default EmployeeStatusType;

export interface EmployeeStatusType extends Model {
    Name?: string;
    Description?: string;
    ParentID?: number;
    Parent?: EmployeeStatusType;
    Children?: EmployeeStatusType[];
}