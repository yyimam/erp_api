import { CreateItemUnitDto } from './dto/create-itemUnit.dto';
import { ItemUnit } from './models/itemUnit.model';
import { ItemUnitService } from './itemUnit.service';
import { Body, Controller, Delete, Get, Param, Post,HttpStatus, Res, Put} from '@nestjs/common';
import { Response } from 'express';

@Controller('item-unit')
export class ItemUnitController {
  constructor(private readonly itemUnitService: ItemUnitService) {}

  @Post()
  async create(@Body() createItemUnitDto: CreateItemUnitDto, @Res() res: Response): Promise<void | ItemUnit> {
    await this.itemUnitService.create(createItemUnitDto)
    .then(rec => {
      this.itemUnitService.findById(rec.id).then(t=>{
        res.status(HttpStatus.CREATED).send(t);
      }).catch(err=>{
        res.status(HttpStatus.NO_CONTENT).send(err.parent);
      })
      
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Put(':code')
  async update(@Param('code') code: string,@Body() updateItemUnitDto: CreateItemUnitDto, @Res() res: Response) {
    await this.itemUnitService.update(code,updateItemUnitDto)
    .then(rec => {
      this.itemUnitService.findOne(code).then(r=>{
        res.status(HttpStatus.OK).send({message: "Record Updated", data: r});
      }).catch(err=>{
        res.status(HttpStatus.NO_CONTENT).send(err.parent);
      })
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Get()
  async findAll(): Promise<ItemUnit[]> {
    console.log("check rec")
    return await this.itemUnitService.findAll();
  }

  @Get(':code')
  async findOne(@Param('code') code: string): Promise<ItemUnit> {
    return await this.itemUnitService.findOne(code);
  }

  @Delete(':code')
  async remove(@Param('code') code: string, @Res() res: Response): Promise<void | ItemUnit> {
    return await this.itemUnitService.remove(code).then(r=>{
      res.status(HttpStatus.ACCEPTED).send({message: "Deleted", data: r});
    }).catch( err => {
      res.status(HttpStatus.NO_CONTENT).send(err.parent);
  }); 
  }
  
}
