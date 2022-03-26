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
  update(@Param('code') code: string,@Body() updateItemUnitDto: CreateItemUnitDto, @Res() res: Response) {
    this.itemUnitService.update(code,updateItemUnitDto)
    .then(rec => {
      this.itemUnitService.findById(rec.id).then(r=>{
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
  findAll(): Promise<ItemUnit[]> {
    console.log("check rec")
    return this.itemUnitService.findAll();
  }

  @Get(':code')
  findOne(@Param('code') code: string): Promise<ItemUnit> {
    return this.itemUnitService.findOne(code);
  }

  @Delete(':code')
  remove(@Param('code') code: string, @Res() res: Response): Promise<void | ItemUnit> {
    return this.itemUnitService.remove(code).then(r=>{
      res.status(HttpStatus.ACCEPTED).send({message: "Deleted", data: r});
    }).catch( err => {
      res.status(HttpStatus.NO_CONTENT).send(err.parent);
  }); 
  }
  
}
