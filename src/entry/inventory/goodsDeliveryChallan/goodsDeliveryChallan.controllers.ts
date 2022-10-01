import { BillingMaster } from '../../../entities/billingMaster.entity';
import { CreateGoodsDeliveryChallanDto } from './dto/create-goodsDeliveryChallan.dto';
import { GoodsDeliveryChallanService } from './goodsDeliveryChallan.service';
import { Body, Controller, Get, Param, Post,HttpStatus, Res, Put} from '@nestjs/common';
import { Response } from 'express';

@Controller('DC')
export class GoodsDeliveryChallanController {
  constructor(private readonly GoodsDeliveryChallansService: GoodsDeliveryChallanService) {}

  @Post()
  async create(@Body() createGoodsDeliveryChallanDto: CreateGoodsDeliveryChallanDto, @Res() res: Response): Promise<void | BillingMaster> {

    return this.GoodsDeliveryChallansService.create(createGoodsDeliveryChallanDto)
    .then(rec => {
      res.status(HttpStatus.CREATED).send(rec);
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });   
     
  }
  
  @Put(':code')
  async update(@Param('code') code: string,@Body() updateGoodsDeliveryChallanDto: CreateGoodsDeliveryChallanDto, @Res() res: Response) {
    this.GoodsDeliveryChallansService.update(code,updateGoodsDeliveryChallanDto)
    .then(rec => {
        res.status(HttpStatus.OK).send({message: "record updated"});
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Get(':limit/:offset')
  async findAll(@Param() params:any): Promise<any> {
    console.log("details");
    return this.GoodsDeliveryChallansService.findAll(params);
  }

  @Get(':code')
  async findOne(@Param('code') code: string): Promise<BillingMaster> {
    return this.GoodsDeliveryChallansService.findOne(code);
  }
  
}
