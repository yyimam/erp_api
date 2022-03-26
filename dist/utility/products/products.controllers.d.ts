import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './models/product.model';
import { ProductsService } from './products.service';
import { Response } from 'express';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto, res: Response): Promise<void | Product>;
    update(code: string, updateProductDto: CreateProductDto, res: Response): void;
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    remove(id: number, res: Response): Promise<void | Product>;
}
