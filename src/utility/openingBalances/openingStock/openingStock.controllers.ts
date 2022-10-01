import { BillingMaster } from '../../../entities/billingMaster.entity';
import { CreateOpeningStockDto } from './dto/create-openingStock.dto';
import { OpeningStockService } from './openingStock.service';
import { Body, Controller, Get, Param, Post,HttpStatus, Res, Put} from '@nestjs/common';
import { Response } from 'express';

@Controller('OS')
export class OpeningStockController {
  constructor(private readonly OpeningStocksService: OpeningStockService) {}

  @Post()
  async create(@Body() createOpeningStockDto: CreateOpeningStockDto, @Res() res: Response): Promise<void | BillingMaster> {

    return this.OpeningStocksService.create(createOpeningStockDto)
    .then(rec => {
      res.status(HttpStatus.CREATED).send(rec);
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });   
  }
  
  @Put(':code')
  async update(@Param('code') code: string,@Body() updateOpeningStockDto: CreateOpeningStockDto, @Res() res: Response) {
    this.OpeningStocksService.update(code,updateOpeningStockDto)
    .then(rec => {
        res.status(HttpStatus.OK).send({message: "record updated"});
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Get(':limit/:offset')
  async findAll(@Param() params:any): Promise<any> {
    let rec = await this.OpeningStocksService.findAll(params);
    rec.limit = +params.limit
    rec.offset = +params.offset;
    return rec ;

  }

  @Get(':code')
  async findOne(@Param('code') code: string): Promise<BillingMaster> {
    return this.OpeningStocksService.findOne(code);
  }
  
}
