import { CreateCustomerOrderDto } from './dto/create-customerOrder.dto';
import { CustomerOrderService } from './customerOrder.service';
import { Body, Controller, Get, Param, Post, HttpStatus, Res, Put, Delete } from '@nestjs/common';
import { Response } from 'express';
import { OrderMaster } from 'src/entities/orderMaster.entity';

@Controller('SO')
export class CustomerOrderController {
  constructor(private readonly CustomerOrdersService: CustomerOrderService) {}

  @Post()
  async create(@Body() createCustomerOrderDto: CreateCustomerOrderDto, @Res() res: Response): Promise<void | OrderMaster> {
    
    return this.CustomerOrdersService.create(createCustomerOrderDto)
    .then(rec => {
      res.status(HttpStatus.CREATED).send(rec);
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Put(':idno')
  async update(@Param('idno') idno: string,@Body() updateCustomerOrderDto: CreateCustomerOrderDto, @Res() res: Response) {
    console.log("yousuf",idno)
    this.CustomerOrdersService.update(idno,updateCustomerOrderDto)
    .then(rec => {
        res.status(HttpStatus.OK).send({message: "record updated", data: rec});
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Get(':limit/:offset')
  async findAll(@Param() params:any): Promise<OrderMaster[]> {
    let t = await this.CustomerOrdersService.findAll(params);
    t.limit = +params.limit
    t.offset = +params.offset;

    return t;
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<OrderMaster> {
    console.log("redd", );
    return this.CustomerOrdersService.findOne(id);
  }

  
  @Delete(':id')
  async remove(@Param('id') id: string , @Res() res: Response): Promise<void | OrderMaster> {
    return this.CustomerOrdersService.remove(id).then(r => {
      res.status(HttpStatus.ACCEPTED).send({ message: "Deleted", data: r });
    }).catch(err => {
      res.status(HttpStatus.NO_CONTENT).send(err.parent);
    });
  }
  
}
