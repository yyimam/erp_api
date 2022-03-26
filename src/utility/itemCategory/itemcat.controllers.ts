import { CreateItemCatDto } from './dto/create-itemcat.dto';
import { ItemCat } from './models/itemcat.model';
import { ItemCatService } from './itemcat.service';
import { Body, Controller, Delete, Get, Param, Post, HttpStatus, Res, Put } from '@nestjs/common';
import { Response } from 'express';
import { BelongsToMany } from 'sequelize-typescript';

@Controller('itemcat')
export class ItemCatController {
  constructor(private readonly ItemCatsService: ItemCatService) { }

  @Post()
  create(@Body() createItemCatDto: CreateItemCatDto, @Res() res: Response): Promise<void | ItemCat> {
    return this.ItemCatsService.create(createItemCatDto)
      .then(rec => {
        this.ItemCatsService.findById(rec.id).then(t => {
          res.status(HttpStatus.CREATED).send(t);
        }).catch(err => {
          res.status(HttpStatus.NO_CONTENT).send(err.parent);
        });
      })
      .catch(err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
      });
  }

  @Put(':code')
  update(@Param('code') code: string, @Body() updateItemCatDto: CreateItemCatDto, @Res() res: Response) {
    this.ItemCatsService.update(code, updateItemCatDto)
      .then(rec => {
        this.ItemCatsService.findOne(code).then(r => {
          res.status(HttpStatus.OK).send({ message: "Record Updated", data: r });
        }).catch(err => {
          res.status(HttpStatus.NO_CONTENT).send(err.parent);
        })
      })
      .catch(err => {
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
  remove(@Param('code') code: string, @Res() res: Response): Promise<void | ItemCat> {
    return this.ItemCatsService.remove(code).then(r => {
      res.status(HttpStatus.ACCEPTED).send({ message: "Deleted", data: r });
    }).catch(err => {
      res.status(HttpStatus.NO_CONTENT).send(err.parent);
    });
  }

}
