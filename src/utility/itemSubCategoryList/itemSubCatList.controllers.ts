import { CreateItemSubCatListDto } from './dto/create-itemSubCatList.dto';
import { ItemSubCatList } from './models/itemSubCatList.model';
import { ItemSubCatListService } from './itemSubCatList.service';
import { Body, Controller, Delete, Get, Param, Post,HttpStatus, Res, Put} from '@nestjs/common';
import { Response } from 'express';
import { BelongsToMany } from 'sequelize-typescript';

@Controller('itemSubCatList')
export class ItemSubCatListController {
  
  constructor(private readonly ItemSubCatListsService: ItemSubCatListService) {}

  @Post()
  create(@Body() createItemSubCatListDto: CreateItemSubCatListDto, @Res() res: Response): Promise<void | ItemSubCatList> {
    return this.ItemSubCatListsService.create(createItemSubCatListDto)
    .then(rec => {
      res.status(HttpStatus.CREATED).send(rec);
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Put(':code')
  update(@Param('code') code: string,@Body() updateItemSubCatListDto: CreateItemSubCatListDto, @Res() res: Response) {
    this.ItemSubCatListsService.update(code,updateItemSubCatListDto)
    .then(rec => {
        res.status(HttpStatus.OK).send({message: "record updated"});
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Get()
  findAll(): Promise<ItemSubCatList[]> {
    return this.ItemSubCatListsService.findAll();
  }

  @Get(':code')
  findOne(@Param('code') code: string): Promise<ItemSubCatList> {
    return this.ItemSubCatListsService.findOne(code);
  }

  @Delete(':code')
  remove(@Param('code') code: string): Promise<void> {
    return this.ItemSubCatListsService.remove(code);
  }
  
}
