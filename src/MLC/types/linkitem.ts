
import LinkTable from './linktable';
import Model from './Model';

export default LinkItem;

export interface LinkItem extends Model {
    LinkID?: number;
    LinkTable?: LinkTable;
    ESPID?: string;
    SoarID?: string;
}