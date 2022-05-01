import { CreateWarehouseListDto } from './dto/create-warehouseList.dto';
import { WarehouseList } from './models/warehouseList.model';
import { WarehouseListService } from './warehouseList.service';
import { Body, Controller, Delete, Get, Param, Post,HttpStatus, Res, Put} from '@nestjs/common';
import { Response } from 'express';

@Controller('warehouse-list')
export class WarehouseListController {
  constructor(private readonly WarehouseListsService: WarehouseListService) {}

  @Post()
  async create(@Body() createWarehouseListDto: CreateWarehouseListDto, @Res() res: Response): Promise<void | WarehouseList> {
    return this.WarehouseListsService.create(createWarehouseListDto)
    .then(rec => {
      let t = this.WarehouseListsService.findById(rec.id).then(r => {
        res.status(HttpStatus.CREATED).send(r);  
      })
      .catch( err => {
        res.status(HttpStatus.NO_CONTENT).send(err.parent);
      });      
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Put(':code')
  async update(@Param('code') code: string,@Body() updateWarehouseListDto: CreateWarehouseListDto, @Res() res: Response) {
    this.WarehouseListsService.update(code,updateWarehouseListDto)
    .then(rec => {
        this.WarehouseListsService.findOne(code).then(r=>{
          res.status(HttpStatus.OK).send({message: "Record Updated", data: r});
        });
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Get()
  async findAll(): Promise<WarehouseList[]> {
    return this.WarehouseListsService.findAll();
  }

  @Get(':code')
  async findOne(@Param('code') code: string): Promise<WarehouseList> {
    return this.WarehouseListsService.findOne(code);
  }

  @Delete(':code')
  async remove(@Param('code') code: string, @Res() res: Response): Promise<void | WarehouseList> {
    return this.WarehouseListsService.remove(code).then(r => {
      res.status(HttpStatus.ACCEPTED).send({message: "Deleted", data: r});
    }).catch( err => {
      res.status(HttpStatus.NO_CONTENT).send(err.parent);
  });   
  }
  
}
