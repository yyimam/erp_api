import { BillingMaster } from '../../../entities/billingMaster.entity';
import { CreateGoodsReturnFromCustomerDto } from './dto/create-goodsReturnFromCustomer.dto';
import { GoodsReturnFromCustomerService } from './goodsReturnFromCustomer.service';
import { Body, Controller, Get, Param, Post,HttpStatus, Res, Put} from '@nestjs/common';
import { Response } from 'express';

@Controller('DR')
export class GoodsReturnFromCustomerController {
  constructor(private readonly GoodsReturnFromCustomersService: GoodsReturnFromCustomerService) {}

  @Post()
  async create(@Body() createGoodsReturnFromCustomerDto: CreateGoodsReturnFromCustomerDto, @Res() res: Response): Promise<void | BillingMaster> {

    return this.GoodsReturnFromCustomersService.create(createGoodsReturnFromCustomerDto)
    .then(rec => {
      res.status(HttpStatus.CREATED).send(rec);
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });   
     
  }
  
  @Put(':code')
  async update(@Param('code') code: string,@Body() updateGoodsReturnFromCustomerDto: CreateGoodsReturnFromCustomerDto, @Res() res: Response) {
    this.GoodsReturnFromCustomersService.update(code,updateGoodsReturnFromCustomerDto)
    .then(rec => {
        res.status(HttpStatus.OK).send({message: "record updated"});
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Get(':limit/:offset')
  async findAll(@Param() params:any): Promise<any> {
    let rec = await this.GoodsReturnFromCustomersService.findAll(params);
    rec.limit = +params.limit
    rec.offset = +params.offset;
    return rec ;

  }

  @Get(':code')
  async findOne(@Param('code') code: string): Promise<BillingMaster> {
    return this.GoodsReturnFromCustomersService.findOne(code);
  }
  
}
