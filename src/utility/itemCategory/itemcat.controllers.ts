import { CreateItemCatDto } from './dto/create-itemcat.dto';
import { ItemCat } from './models/itemcat.model';
import { ItemCatService } from './itemcat.service';
import { Body, Controller, Delete, Get, Param, Post,HttpStatus, Res, Put} from '@nestjs/common';
import { Response } from 'express';
import { BelongsToMany } from 'sequelize-typescript';

@Controller('itemcat')
export class ItemCatController {
  constructor(private readonly ItemCatsService: ItemCatService) {}

  @Post()
  create(@Body() createItemCatDto: CreateItemCatDto, @Res() res: Response): Promise<void | ItemCat> {
    return this.ItemCatsService.create(createItemCatDto)
    .then(rec => {
      res.status(HttpStatus.CREATED).send(rec);
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Put(':code')
  update(@Param('code') code: string,@Body() updateItemCatDto: CreateItemCatDto, @Res() res: Response) {
    this.ItemCatsService.update(code,updateItemCatDto)
    .then(rec => {
        res.status(HttpStatus.OK).send({message: "record updated"});
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Get()
  findAll(): Promise<ItemCat[]> {
    return this.ItemCatsService.findAll();
  }

  @Get(':code')
  findOne(@Param('code') code: string): Promise<ItemCat> {
    return this.ItemCatsService.findOne(code);
  }

  @Delete(':code')
  remove(@Param('code') code: string): Promise<void> {
    return this.ItemCatsService.remove(code);
  }
  
}
