
import PhoneValidation from './PhoneValidation';
import PhoneType from './PhoneType';
import PersonPhone from './PersonPhone';
import Model from './Model';

export default Phone;

export interface Phone extends Model {
    Number?: string;
    Validations?: PhoneValidation[];
    Validation?: PhoneValidation;
    Type?: PhoneType;
    People?: PersonPhone[];
}