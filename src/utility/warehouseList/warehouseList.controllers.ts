import { CreateWarehouseListDto } from './dto/create-warehouseList.dto';
import { WarehouseList } from './models/warehouseList.model';
import { WarehouseListService } from './warehouseList.service';
import { Body, Controller, Delete, Get, Param, Post,HttpStatus, Res, Put} from '@nestjs/common';
import { Response } from 'express';
import { BelongsToMany } from 'sequelize-typescript';

@Controller('warehouse-list')
export class WarehouseListController {
  constructor(private readonly WarehouseListsService: WarehouseListService) {}

  @Post()
  create(@Body() createWarehouseListDto: CreateWarehouseListDto, @Res() res: Response): Promise<void | WarehouseList> {
    return this.WarehouseListsService.create(createWarehouseListDto)
    .then(rec => {
      res.status(HttpStatus.CREATED).send(rec);
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Put(':code')
  update(@Param('code') code: string,@Body() updateWarehouseListDto: CreateWarehouseListDto, @Res() res: Response) {
    this.WarehouseListsService.update(code,updateWarehouseListDto)
    .then(rec => {
        res.status(HttpStatus.OK).send({message: "record updated"});
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Get()
  findAll(): Promise<WarehouseList[]> {
    return this.WarehouseListsService.findAll();
  }

  @Get(':code')
  findOne(@Param('code') code: string): Promise<WarehouseList> {
    return this.WarehouseListsService.findOne(code);
  }

  @Delete(':code')
  remove(@Param('code') code: string): Promise<void> {
    return this.WarehouseListsService.remove(code);
  }
  
}
