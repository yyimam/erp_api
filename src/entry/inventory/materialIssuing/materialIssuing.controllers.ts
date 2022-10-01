import { BillingMaster } from '../../../entities/billingMaster.entity';
import { CreateMaterialIssuingDto } from './dto/create-materialIssuing.dto';
import { MaterialIssuingService } from './materialIssuing.service';
import { Body, Controller, Get, Param, Post,HttpStatus, Res, Put} from '@nestjs/common';
import { Response } from 'express';

@Controller('IS')
export class MaterialIssuingController {
  constructor(private readonly MaterialIssuingsService: MaterialIssuingService) {}

  @Post()
  async create(@Body() createMaterialIssuingDto: CreateMaterialIssuingDto, @Res() res: Response): Promise<void | BillingMaster> {

    return this.MaterialIssuingsService.create(createMaterialIssuingDto)
    .then(rec => {
      res.status(HttpStatus.CREATED).send(rec);
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });   
     
  }
  
  @Put(':code')
  async update(@Param('code') code: string,@Body() updateMaterialIssuingDto: CreateMaterialIssuingDto, @Res() res: Response) {
    this.MaterialIssuingsService.update(code,updateMaterialIssuingDto)
    .then(rec => {
        res.status(HttpStatus.OK).send({message: "record updated"});
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Get(':limit/:offset')
  async findAll(@Param() params:any): Promise<any> {
    let rec = await this.MaterialIssuingsService.findAll(params);
    rec.limit = +params.limit
    rec.offset = +params.offset;
    return rec ;

  }

  @Get(':code')
  async findOne(@Param('code') code: string): Promise<BillingMaster> {
    return this.MaterialIssuingsService.findOne(code);
  }
  
}
