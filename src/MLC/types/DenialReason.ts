
import DenialCategory from './DenialCategory';
import Model from './Model';

export default DenialReason;

export interface DenialReason extends Model {
    CategoryID?: number;
    Category?: DenialCategory;
    Name?: string;
    Description?: string;
    Order?: number;
    Active?: boolean;
}