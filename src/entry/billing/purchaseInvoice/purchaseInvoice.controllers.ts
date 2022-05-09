import { BillingMaster } from './../../../entities/billingMaster.entity';
import { CreatePurchaseInvoiceDto } from './dto/create-purchaseInvoice.dto';
import { PurchaseInvoiceService } from './purchaseInvoice.service';
import { Body, Controller, Get, Param, Post,HttpStatus, Res, Put} from '@nestjs/common';
import { Response } from 'express';

@Controller('PU')
export class PurchaseInvoiceController {
  constructor(private readonly PurchaseInvoicesService: PurchaseInvoiceService) {}

  @Post()
  async create(@Body() createPurchaseInvoiceDto: CreatePurchaseInvoiceDto, @Res() res: Response): Promise<void | BillingMaster> {
    
    return this.PurchaseInvoicesService.create(createPurchaseInvoiceDto)
    .then(rec => {
      res.status(HttpStatus.CREATED).send(rec);
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Put(':code')
  async update(@Param('code') code: string,@Body() updatePurchaseInvoiceDto: CreatePurchaseInvoiceDto, @Res() res: Response) {
    this.PurchaseInvoicesService.update(code,updatePurchaseInvoiceDto)
    .then(rec => {
        res.status(HttpStatus.OK).send({message: "record updated"});
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Get()
  async findAll(): Promise<BillingMaster[]> {
    console.log("details");
    return this.PurchaseInvoicesService.findAll();
  }

  @Get(':code')
  async findOne(@Param('code') code: string): Promise<BillingMaster> {
    console.log("details",code);
    return this.PurchaseInvoicesService.findOne(code);
  }
  
}
