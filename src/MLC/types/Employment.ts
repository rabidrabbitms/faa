
import EmploymentType from './EmploymentType';
import Model from './Model';

export default Employment;

export interface Employment extends Model {
    Company?: string;
    DOH?: Date;
    Title?: string;
    Hours?: number;
    TypeID?: number;
    Type?: EmploymentType;
}