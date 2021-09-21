import Model from './Model';
import Product from './Product';

export default interface ProductCategory extends Model {
    Name?: string;
    Description?: string;
    Image?: string;
    Products: Array<Product>;
}