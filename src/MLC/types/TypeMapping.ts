import PropertyMapping from './PropertyMapping';
import Model from './Model';

type TypeMapping<T extends Model> = {
    [P in keyof T]?: T[P] extends any[]
    ? ([PropertyMapping<T[P]>] | PropertyMapping<T[P]> | boolean)
    : PropertyMapping<T[P]> | boolean;
};

export default TypeMapping;
