
import Person from './Person';
import Model from './Model';
import Store from './Store';

export default Lead;

export interface Lead extends Model {
    ID?: number;
    Person?: Person;
    Source?: string;
    Status?: {};
    Store?: Store;
    Date?: Date;
}