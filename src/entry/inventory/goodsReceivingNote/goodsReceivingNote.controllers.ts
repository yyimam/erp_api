import { BillingMaster } from '../../../entities/billingMaster.entity';
import { CreateGoodsReceivingNoteDto } from './dto/create-goodsReceivingNote.dto';
import { GoodsReceivingNoteService } from './goodsReceivingNote.service';
import { Body, Controller, Get, Param, Post,HttpStatus, Res, Put} from '@nestjs/common';
import { Response } from 'express';

@Controller('GR')
export class GoodsReceivingNoteController {
  constructor(private readonly GoodsReceivingNotesService: GoodsReceivingNoteService) {}

  @Post()
  async create(@Body() createGoodsReceivingNoteDto: CreateGoodsReceivingNoteDto, @Res() res: Response): Promise<void | BillingMaster> {

    return this.GoodsReceivingNotesService.create(createGoodsReceivingNoteDto)
    .then(rec => {
      res.status(HttpStatus.CREATED).send(rec);
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });   
     
  }
  
  @Put(':code')
  async update(@Param('code') code: string,@Body() updateGoodsReceivingNoteDto: CreateGoodsReceivingNoteDto, @Res() res: Response) {
    this.GoodsReceivingNotesService.update(code,updateGoodsReceivingNoteDto)
    .then(rec => {
        res.status(HttpStatus.OK).send({message: "record updated"});
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Get(':limit/:offset')
  async findAll(@Param() params:any): Promise<any> {
    let rec = await this.GoodsReceivingNotesService.findAll(params);
    rec.limit = +params.limit
    rec.offset = +params.offset;
    return rec ;
  }

  @Get(':code')
  async findOne(@Param('code') code: string): Promise<BillingMaster> {
    return this.GoodsReceivingNotesService.findOne(code);
  }
  
}
