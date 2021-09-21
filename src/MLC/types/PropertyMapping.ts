import TypeMapping from './TypeMapping';

type PropertyMapping<T> = T extends Array<infer E>
  ? TypeMapping<E>
  : TypeMapping<T>;

export default PropertyMapping;
