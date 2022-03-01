import { Product } from './models/product.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductDto } from './dto/create-product.dto';
import { where } from 'sequelize/dist';

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

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
