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
  async create(@Body() createItemSubCatListDto: CreateItemSubCatListDto, @Res() res: Response): Promise<void | ItemSubCatList> {
    await this.ItemSubCatListsService.create(createItemSubCatListDto)
    .then(rec => {
      this.ItemSubCatListsService.findById(rec.id).then(r=>{
        res.status(HttpStatus.CREATED).send(r);
      }).catch(err=>{
        res.status(HttpStatus.NO_CONTENT).send(err.parent);
      })
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Put(':code')
  async update(@Param('code') code: string,@Body() updateItemSubCatListDto: CreateItemSubCatListDto, @Res() res: Response) {
    await this.ItemSubCatListsService.update(code,updateItemSubCatListDto)
    .then(rec => {
      this.ItemSubCatListsService.findOne(code).then(r => {
        res.status(HttpStatus.OK).send({ message: "Record Updated", data: r });
      }).catch(err => {
        res.status(HttpStatus.NO_CONTENT).send(err.parent);
      })
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Get()
  async findAll(): Promise<ItemSubCatList[]> {
    return await this.ItemSubCatListsService.findAll();
  }

  @Get(':code')
  async findOne(@Param('code') code: string): Promise<ItemSubCatList> {
    return await this.ItemSubCatListsService.findOne(code);
  }

  @Delete(':code')
  async remove(@Param('code') code: string, @Res() res: Response): Promise<void | ItemSubCatList> {
    return await this.ItemSubCatListsService.remove(code).then(r => {
      res.status(HttpStatus.ACCEPTED).send({ message: "Deleted", data: r });
    }).catch(err => {
      res.status(HttpStatus.NO_CONTENT).send(err.parent);
    });
  }
  
}
