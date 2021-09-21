
import Model from './Model';

export default Email;

export interface Email extends Model {
    Address?: string;
    Validated?: boolean;
}