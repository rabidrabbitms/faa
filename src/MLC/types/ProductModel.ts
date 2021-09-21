import Model from './Model';
import Product from './Product';

export default interface ProductModel extends Model {
    Product: Product;

    Name?: string;

    Price?: number;
    Cost?: number;
    Term?: number;
    Inventory?: number;

    MainImage?: string;
    Images?: ProductImage[];
}

interface ProductImage {
    url: string;
    selected: boolean;
}