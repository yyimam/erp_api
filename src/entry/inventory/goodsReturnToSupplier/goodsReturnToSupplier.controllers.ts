import { BillingMaster } from '../../../entities/billingMaster.entity';
import { CreateGoodsReturnToSupplierDto } from './dto/create-goodsReturnToSupplier.dto';
import { GoodsReturnToSupplierService } from './goodsReturnToSupplier.service';
import { Body, Controller, Get, Param, Post,HttpStatus, Res, Put} from '@nestjs/common';
import { Response } from 'express';

@Controller('RG')
export class GoodsReturnToSupplierController {
  constructor(private readonly GoodsReturnToSuppliersService: GoodsReturnToSupplierService) {}

  @Post()
  async create(@Body() createGoodsReturnToSupplierDto: CreateGoodsReturnToSupplierDto, @Res() res: Response): Promise<void | BillingMaster> {

    return this.GoodsReturnToSuppliersService.create(createGoodsReturnToSupplierDto)
    .then(rec => {
      res.status(HttpStatus.CREATED).send(rec);
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });   
     
  }
  
  @Put(':code')
  async update(@Param('code') code: string,@Body() updateGoodsReturnToSupplierDto: CreateGoodsReturnToSupplierDto, @Res() res: Response) {
    this.GoodsReturnToSuppliersService.update(code,updateGoodsReturnToSupplierDto)
    .then(rec => {
        res.status(HttpStatus.OK).send({message: "record updated"});
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Get(':limit/:offset')
  async findAll(@Param() params:any): Promise<any> {
    let t = await this.GoodsReturnToSuppliersService.findAll(params);
    t.limit = +params.limit
    t.offset = +params.offset;
    return t ;
  }

  @Get(':code')
  async findOne(@Param('code') code: string): Promise<BillingMaster> {
    return this.GoodsReturnToSuppliersService.findOne(code);
  }
  
}
