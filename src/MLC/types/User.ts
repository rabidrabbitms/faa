
import Person from './Person';
import Role from './Role';
import Model from './Model';

export default User;

export interface User extends Model {
    ID?: number;
    Person?: Person;
    Token?: string;
    Username?: string;
    Password?: string;
    UpdatedDate?: Date;
    UserID?: number;
    UserOne?: User;
    Date?: Date;
    Roles?: Role[];
}