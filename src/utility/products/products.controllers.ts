import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './models/product.model';
import { ProductsService } from './products.service';
import { Body, Controller, Delete, Get, Param, Post,HttpStatus, Res, Put} from '@nestjs/common';
import { Response } from 'express';
import { BelongsToMany } from 'sequelize-typescript';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto, @Res() res: Response): Promise<void | Product> {
    return this.productsService.create(createProductDto)
    .then(rec => {
      res.status(HttpStatus.CREATED).send(rec);
        // return res
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Put(':code')
  update(@Param('code') code: string,@Body() updateProductDto: CreateProductDto, @Res() res: Response) {
    this.productsService.update(code,updateProductDto)
    .then(rec => {
        res.status(HttpStatus.OK).send({message: "record updated"});
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  
  @Get()
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':code')
  findOne(@Param('code') code: string): Promise<Product> {
    return this.productsService.findOne(code);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.productsService.remove(id);
  }

}
