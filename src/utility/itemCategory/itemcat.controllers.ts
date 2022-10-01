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
  async create(@Body() createItemCatDto: CreateItemCatDto, @Res() res: Response): Promise<void | ItemCat> {
    await this.ItemCatsService.create(createItemCatDto)
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
  async update(@Param('code') code: string, @Body() updateItemCatDto: CreateItemCatDto, @Res() res: Response) {
    await this.ItemCatsService.update(code, updateItemCatDto)
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
  async findAll(): Promise<ItemCat[]> {
    try {
      return await this.ItemCatsService.findAll();
    } catch (error) {
      return error;
    }
    
  }

  @Get(':code')
  async findOne(@Param('code') code: string): Promise<ItemCat> {
    return await this.ItemCatsService.findOne(code);
  }

  @Delete(':code')
  async remove(@Param('code') code: string, @Res() res: Response): Promise<void | ItemCat> {
    return await this.ItemCatsService.remove(code).then(r => {
      res.status(HttpStatus.ACCEPTED).send({ message: "Deleted", data: r });
    }).catch(err => {
      res.status(HttpStatus.NO_CONTENT).send(err.parent);
    });
  }

}
