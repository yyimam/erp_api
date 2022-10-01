import { Product } from './models/product.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductDto } from './dto/create-product.dto';
import {Op,literal} from "sequelize";

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product)
    private readonly productModel: typeof Product,
  ) {}

  async create(CreateProductDto: CreateProductDto): Promise<Product> {
    
    let t:{}= CreateProductDto
    return await this.productModel.create(t)
    .then(rec => {console.log("reco", rec);return rec;})
    .catch(err => {console.log("records", err);return err});
  }

  async update(code: string, UpdateProductDto: CreateProductDto): Promise<any>{
    let t:{}= UpdateProductDto;
    return await this.productModel.update(t,{where:{code:code}});
  }

  async findAll(): Promise<Product[]> {
    return await this.productModel.findAll();
  }

  async findOne(code: string): Promise<Product> {
    return await this.productModel.findOne({
      where: {
        code,
      },
    });
  }

  async findById(id: number): Promise<Product> {
    return this.productModel.findOne({
      where: {
        id,
      },
    });
  }

 

  async findByItemType(itemtype: string): Promise<Product[]>{
    return await this.productModel.findAll({
      where:{
        itemtype
      }
    })
  }

  async remove(id: number): Promise<Product> {
    const product = await this.findById(id);
    let u = await product.destroy().then(t => t);
    return product;
  }

  async search(string: string): Promise<Product[]> {
    console.log("rec", string);
    const product = await this.productModel.findAll({
      where:{
        name: {
          [Op.like]: `%${string}%`
        }
      }
    });
    return product;
  }
}
