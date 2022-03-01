import { CreateItemTypeDto } from './dto/create-ItemType.dto';
import { ItemType } from './models/ItemType.model';
import { ItemTypeService } from './ItemType.service';
import { Body, Controller, Delete, Get, Param, Post,HttpStatus, Res, Put} from '@nestjs/common';
import { Response } from 'express';

@Controller('item-type')
export class ItemTypeController {
  constructor(private readonly ItemTypesService: ItemTypeService) {}

  @Post()
  create(@Body() createItemTypeDto: CreateItemTypeDto, @Res() res: Response): Promise<void | ItemType> {
    return this.ItemTypesService.create(createItemTypeDto)
    .then(rec => {
      res.status(HttpStatus.CREATED).send(rec);
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Put(':code')
  update(@Param('code') code: string,@Body() updateItemTypeDto: CreateItemTypeDto, @Res() res: Response) {
    this.ItemTypesService.update(code,updateItemTypeDto)
    .then(rec => {
        res.status(HttpStatus.OK).send({message: "record updated"});
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Get()
  findAll(): Promise<ItemType[]> {
    console.log("check rec")
    return this.ItemTypesService.findAll();
  }

  @Get(':code')
  findOne(@Param('code') code: string): Promise<ItemType> {
    return this.ItemTypesService.findOne(code);
  }

  @Delete(':code')
  remove(@Param('code') code: string): Promise<void> {
    return this.ItemTypesService.remove(code);
  }
  
}
