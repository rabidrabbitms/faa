type DeeplyRequired<T> = { [P in keyof T]-?: DeeplyRequired<T[P]> };

export default DeeplyRequired;
