import { BillingMaster } from '../../../entities/billingMaster.entity';
import { CreateMaterialReturnBackDto } from './dto/create-materialReturnBack.dto';
import { MaterialReturnBackService } from './materialReturnBack.service';
import { Body, Controller, Get, Param, Post,HttpStatus, Res, Put} from '@nestjs/common';
import { Response } from 'express';

@Controller('RB')
export class MaterialReturnBackController {
  constructor(private readonly MaterialReturnBacksService: MaterialReturnBackService) {}

  @Post()
  async create(@Body() createMaterialReturnBackDto: CreateMaterialReturnBackDto, @Res() res: Response): Promise<void | BillingMaster> {

    return this.MaterialReturnBacksService.create(createMaterialReturnBackDto)
    .then(rec => {
      res.status(HttpStatus.CREATED).send(rec);
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });   
     
  }
  
  @Put(':code')
  async update(@Param('code') code: string,@Body() updateMaterialReturnBackDto: CreateMaterialReturnBackDto, @Res() res: Response) {
    this.MaterialReturnBacksService.update(code,updateMaterialReturnBackDto)
    .then(rec => {
        res.status(HttpStatus.OK).send({message: "record updated"});
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Get(':limit/:offset')
  async findAll(@Param() params:any): Promise<any> {
    let rec = await this.MaterialReturnBacksService.findAll(params);
    rec.limit = +params.limit
    rec.offset = +params.offset;
    return rec ;

  }

  @Get(':code')
  async findOne(@Param('code') code: string): Promise<BillingMaster> {
    return this.MaterialReturnBacksService.findOne(code);
  }
  
}
