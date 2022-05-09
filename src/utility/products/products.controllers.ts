import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './models/product.model';
import { ProductsService } from './products.service';
import { Body, Controller, Delete, Get, Param, Post, HttpStatus, Res, Put } from '@nestjs/common';
import { Response } from 'express';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post()
  async create(@Body() createProductDto: CreateProductDto, @Res() res: Response): Promise<void | Product> {
    this.productsService.create(createProductDto)
      .then(rec => {
        this.productsService.findById(rec.id).then(r => {
          res.status(HttpStatus.CREATED).send(r);
        })
        .catch(err => {
          res.status(HttpStatus.NO_CONTENT).send(err.parent);
        });
      })
      .catch(err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
      });
  }

  @Put(':code')
  async update(@Param('code') code: string, @Body() updateProductDto: CreateProductDto, @Res() res: Response) {
    await this.productsService.update(code, updateProductDto)
      .then(rec => {
        this.productsService.findOne(code).then(r => {
          res.status(HttpStatus.OK).send({ message: "Record Updated", data: r });
        });
      })
      .catch(err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
      });
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return await this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Product> {
    return await this.productsService.findById(id);
  }

  @Get('/:ref/:para')
  async findByString(@Param('ref') ref: string, @Param('para') para: string): Promise<Product[]> {
    return await this.productsService.findByItemType(para);
  }

  @Delete(':id')
  async remove(@Param('id') id: number, @Res() res: Response): Promise<void | Product> {
    await this.productsService.remove(id).then(r => {
      res.status(HttpStatus.ACCEPTED).send({ message: "Deleted", data: r });
    }).catch(err => {
      res.status(HttpStatus.NO_CONTENT).send(err.parent);
    });
  }

}
