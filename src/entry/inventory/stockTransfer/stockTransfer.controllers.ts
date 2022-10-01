import { BillingMaster } from '../../../entities/billingMaster.entity';
import { CreateStockTransferDto } from './dto/create-stockTransfer.dto';
import { StockTransferService } from './stockTransfer.service';
import { Body, Controller, Get, Param, Post,HttpStatus, Res, Put} from '@nestjs/common';
import { Response } from 'express';

@Controller('ST')
export class StockTransferController {
  constructor(private readonly StockTransfersService: StockTransferService) {}

  @Post()
  async create(@Body() createStockTransferDto: CreateStockTransferDto, @Res() res: Response): Promise<void | BillingMaster> {

    return this.StockTransfersService.create(createStockTransferDto)
    .then(rec => {
      res.status(HttpStatus.CREATED).send(rec);
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });   
  }
  
  @Put(':code')
  async update(@Param('code') code: string,@Body() updateStockTransferDto: CreateStockTransferDto, @Res() res: Response) {
    this.StockTransfersService.update(code,updateStockTransferDto)
    .then(rec => {
        res.status(HttpStatus.OK).send({message: "record updated"});
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Get(':limit/:offset')
  async findAll(@Param() params:any): Promise<any> {
    let rec = await this.StockTransfersService.findAll(params);
    rec.limit = +params.limit
    rec.offset = +params.offset;
    return rec ;

  }

  @Get(':code')
  async findOne(@Param('code') code: string): Promise<BillingMaster> {
    return this.StockTransfersService.findOne(code);
  }
  
}
