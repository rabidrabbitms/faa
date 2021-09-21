
import Model from './Model';

export default LinkTable;

export interface LinkTable extends Model {
    ESPTableName?: string;
    SoarTableName?: string;
}