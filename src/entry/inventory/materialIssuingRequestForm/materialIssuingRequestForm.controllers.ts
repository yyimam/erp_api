import { BillingMaster } from '../../../entities/billingMaster.entity';
import { CreateMaterialIssuingRequestFormDto } from './dto/create-materialIssuingRequestForm.dto';
import { MaterialIssuingRequestFormService } from './materialIssuingRequestForm.service';
import { Body, Controller, Get, Param, Post,HttpStatus, Res, Put} from '@nestjs/common';
import { Response } from 'express';

@Controller('MR')
export class MaterialIssuingRequestFormController {
  constructor(private readonly MaterialIssuingRequestFormsService: MaterialIssuingRequestFormService) {}

  @Post()
  async create(@Body() createMaterialIssuingRequestFormDto: CreateMaterialIssuingRequestFormDto, @Res() res: Response): Promise<void | BillingMaster> {

    return this.MaterialIssuingRequestFormsService.create(createMaterialIssuingRequestFormDto)
    .then(rec => {
      res.status(HttpStatus.CREATED).send(rec);
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });   
     
  }
  
  @Put(':code')
  async update(@Param('code') code: string,@Body() updateMaterialIssuingRequestFormDto: CreateMaterialIssuingRequestFormDto, @Res() res: Response) {
    this.MaterialIssuingRequestFormsService.update(code,updateMaterialIssuingRequestFormDto)
    .then(rec => {
        res.status(HttpStatus.OK).send({message: "record updated"});
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Get(':limit/:offset')
  async findAll(@Param() params:any): Promise<any> {
    let rec = await this.MaterialIssuingRequestFormsService.findAll(params);
    rec.limit = +params.limit
    rec.offset = +params.offset;
    return rec ;

  }

  @Get(':code')
  async findOne(@Param('code') code: string): Promise<BillingMaster> {
    return this.MaterialIssuingRequestFormsService.findOne(code);
  }
  
}
