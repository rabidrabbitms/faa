
import Phone from './Phone';
import Model from './Model';

export default CollectionAgency;

export interface CollectionAgency extends Model {
    Name?: string;
    PhoneID?: number;
    Phone?: Phone;
}