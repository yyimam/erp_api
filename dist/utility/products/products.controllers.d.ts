import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './models/product.model';
import { ProductsService } from './products.service';
import { Response } from 'express';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto, res: Response): Promise<void | Product>;
    update(code: string, updateProductDto: CreateProductDto, res: Response): Promise<void>;
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    SearchProduct(string: string, res: Response): Promise<void | Product>;
    findByString(ref: string, para: string): Promise<Product[]>;
    remove(id: number, res: Response): Promise<void | Product>;
}
