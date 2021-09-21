import Model from './Model';
import ProductCategory from './ProductCategory';
import ProductModel from './ProductModel';

export default interface Product extends Model {
    Category?: ProductCategory;
    Name?: string;
    Model?: string;
    Description?: string;
    Features?: string;
    WhatsIncluded?: string;
    ProductModels: ProductModel[];
}