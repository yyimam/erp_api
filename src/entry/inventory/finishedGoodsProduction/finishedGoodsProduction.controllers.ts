import { BillingMaster } from '../../../entities/billingMaster.entity';
import { CreateFinishedGoodsProductionDto } from './dto/create-finishedGoodsProduction.dto';
import { FinishedGoodsProductionService } from './finishedGoodsProduction.service';
import { Body, Controller, Get, Param, Post,HttpStatus, Res, Put} from '@nestjs/common';
import { Response } from 'express';

@Controller('PD')
export class FinishedGoodsProductionController {
  constructor(private readonly FinishedGoodsProductionsService: FinishedGoodsProductionService) {}

  @Post()
  async create(@Body() createFinishedGoodsProductionDto: CreateFinishedGoodsProductionDto, @Res() res: Response): Promise<void | BillingMaster> {

    return this.FinishedGoodsProductionsService.create(createFinishedGoodsProductionDto)
    .then(rec => {
      res.status(HttpStatus.CREATED).send(rec);
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });   
  }
  
  @Put(':code')
  async update(@Param('code') code: string,@Body() updateFinishedGoodsProductionDto: CreateFinishedGoodsProductionDto, @Res() res: Response) {
    this.FinishedGoodsProductionsService.update(code,updateFinishedGoodsProductionDto)
    .then(rec => {
        res.status(HttpStatus.OK).send({message: "record updated"});
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Get(':limit/:offset')
  async findAll(@Param() params:any): Promise<any> {
    let rec = await this.FinishedGoodsProductionsService.findAll(params);
    rec.limit = +params.limit
    rec.offset = +params.offset;
    return rec ;

  }

  @Get(':code')
  async findOne(@Param('code') code: string): Promise<BillingMaster> {
    return this.FinishedGoodsProductionsService.findOne(code);
  }
  
}
