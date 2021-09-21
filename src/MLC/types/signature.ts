export default Signature;

export interface Signature {
    Name?: string;
    Type?: string;
    Image?: string;
    Date?: Date;
    Size?: Size;
    Lines?: Point[][];
}
export interface Size {
    Width?: number;
    Height?: number;
}
export interface Point {
    X?: number;
    Y?: number;
}