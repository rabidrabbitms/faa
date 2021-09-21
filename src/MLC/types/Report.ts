
import Model from './Model';

export default Report;

export interface Report extends Model {
    Name?: string;
    Description?: string;
    Procedure?: string;
    Export?: string;
    Active?: boolean;
    Roles?: {}[];
}