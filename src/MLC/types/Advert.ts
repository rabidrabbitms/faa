import Model from './Model';

export default Advert;

export interface Advert extends Model {
    Name?: string;
    Description?: string;
    Image?: string;
    Header?: string;
    Body?: string;
    URL?: string;
    isActive?: boolean;
}