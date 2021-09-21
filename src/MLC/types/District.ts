
import Store from './Store';
import Model from './Model';

export default District;

export interface District extends Model {
    Number?: string;
    Name?: string;
    Stores?: Store[];
}