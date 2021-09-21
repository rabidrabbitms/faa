
import DenialReason from './DenialReason';
import Model from './Model';

export default DenialCategory;

export interface DenialCategory extends Model {
    Name?: string;
    Order?: number;
    Active?: boolean;
    Reasons?: DenialReason[];
}