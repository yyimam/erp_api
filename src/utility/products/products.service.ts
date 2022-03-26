import { Product } from './models/product.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product)
    private readonly productModel: typeof Product,
  ) {}

  create(CreateProductDto: CreateProductDto): Promise<Product> {
    let t:{}= CreateProductDto
    return this.productModel.create(t);
  }

  async update(code: string, UpdateProductDto: CreateProductDto): Promise<any>{
    let t:{}= UpdateProductDto;
    return await this.productModel.update(t,{where:{code:code}});
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.findAll();
  }

  findOne(code: string): Promise<Product> {
    return this.productModel.findOne({
      where: {
        code,
      },
    });
  }

  findById(id: number): Promise<Product> {
    return this.productModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: number): Promise<Product> {
    const product = await this.findById(id);
    let u = await product.destroy().then(t => t);
    return product;
  }
}
