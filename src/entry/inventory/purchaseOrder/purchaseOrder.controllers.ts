import { CreatePurchaseOrderDto } from './dto/create-purchaseOrder.dto';
import { PurchaseOrderService } from './purchaseOrder.service';
import { Body, Controller, Get, Param, Post, HttpStatus, Res, Put, Delete } from '@nestjs/common';
import { Response } from 'express';
import { OrderMaster } from 'src/entities/orderMaster.entity';

@Controller('PO')
export class PurchaseOrderController {
  constructor(private readonly PurchaseOrdersService: PurchaseOrderService) {}
  @Post()
  async create(@Body() createPurchaseOrderDto: CreatePurchaseOrderDto, @Res() res: Response): Promise<void | OrderMaster> {
    return this.PurchaseOrdersService.create(createPurchaseOrderDto)
    .then(rec => {
      res.status(HttpStatus.CREATED).send(rec);
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Put(':idno')
  async update(@Param('idno') idno: string,@Body() updatePurchaseOrderDto: CreatePurchaseOrderDto, @Res() res: Response) {
    this.PurchaseOrdersService.update(idno,updatePurchaseOrderDto)
    .then(rec => {
        res.status(HttpStatus.OK).send({message: "record updated", data: rec});
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Get(':limit/:offset')
  async findAll(@Param() params:any): Promise<OrderMaster[]> {
    let t = await this.PurchaseOrdersService.findAll(params);
    t.limit = +params.limit
    t.offset = +params.offset;

    return t;
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<OrderMaster> {
    console.log("redd", );
    return this.PurchaseOrdersService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string , @Res() res: Response): Promise<void | OrderMaster> {
    return this.PurchaseOrdersService.remove(id).then(r => {
      res.status(HttpStatus.ACCEPTED).send({ message: "Deleted", data: r });
    }).catch(err => {
      res.status(HttpStatus.NO_CONTENT).send(err.parent);
    });
  }
  
}
