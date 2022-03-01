import { CreateItemUnitDto } from './dto/create-itemUnit.dto';
import { ItemUnit } from './models/itemUnit.model';
import { ItemUnitService } from './itemUnit.service';
import { Body, Controller, Delete, Get, Param, Post,HttpStatus, Res, Put} from '@nestjs/common';
import { Response } from 'express';

@Controller('item-unit')
export class ItemUnitController {
  constructor(private readonly itemUnitService: ItemUnitService) {}

  @Post()
  create(@Body() createItemUnitDto: CreateItemUnitDto, @Res() res: Response): Promise<void | ItemUnit> {
    return this.itemUnitService.create(createItemUnitDto)
    .then(rec => {
      res.status(HttpStatus.CREATED).send(rec);
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Put(':code')
  update(@Param('code') code: string,@Body() updateItemUnitDto: CreateItemUnitDto, @Res() res: Response) {
    this.itemUnitService.update(code,updateItemUnitDto)
    .then(rec => {
        res.status(HttpStatus.OK).send({message: "record updated"});
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Get()
  findAll(): Promise<ItemUnit[]> {
    console.log("check rec")
    return this.itemUnitService.findAll();
  }

  @Get(':code')
  findOne(@Param('code') code: string): Promise<ItemUnit> {
    return this.itemUnitService.findOne(code);
  }

  @Delete(':code')
  remove(@Param('code') code: string): Promise<void> {
    return this.itemUnitService.remove(code);
  }
  
}
