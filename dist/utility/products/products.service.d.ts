import { Product } from './models/product.model';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductsService {
    private readonly productModel;
    constructor(productModel: typeof Product);
    create(CreateProductDto: CreateProductDto): Promise<Product>;
    update(code: string, UpdateProductDto: CreateProductDto): Promise<any>;
    findAll(): Promise<Product[]>;
    findOne(code: string): Promise<Product>;
    findById(id: number): Promise<Product>;
    findByItemType(itemtype: string): Promise<Product[]>;
    remove(id: number): Promise<Product>;
    search(string: string): Promise<Product[]>;
}
