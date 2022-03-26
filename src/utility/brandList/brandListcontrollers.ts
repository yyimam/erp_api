import { CreateBrandListDto } from './dto/create-brandList.dto';
import { BrandList } from './models/brandList.model';
import { BrandListService } from './BrandList.service';
import { Body, Controller, Delete, Get, Param, Post, HttpStatus, Res, Put } from '@nestjs/common';
import { Response } from 'express';

@Controller('brand-list')
export class BrandListController {
  constructor(private readonly BrandListsService: BrandListService) { }

  @Post()
  create(@Body() createBrandListDto: CreateBrandListDto, @Res() res: Response): Promise<void | BrandList> {
    return this.BrandListsService.create(createBrandListDto)
      .then(rec => {
        this.BrandListsService.findById(rec.id).then(t => {
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
  update(@Param('code') code: string, @Body() updateBrandListDto: CreateBrandListDto, @Res() res: Response) {
    this.BrandListsService.update(code, updateBrandListDto)
      .then(rec => {
        this.BrandListsService.findOne(code).then(r => {
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
  findAll(): Promise<BrandList[]> {
    return this.BrandListsService.findAll();
  }

  @Get(':code')
  findOne(@Param('code') code: string): Promise<BrandList> {
    return this.BrandListsService.findOne(code);
  }

  @Delete(':code')
  remove(@Param('code') code: string, @Res() res: Response): Promise<void | BrandList> {
    return this.BrandListsService.remove(code).then(r => {
      res.status(HttpStatus.ACCEPTED).send({ message: "Deleted", data: r });
    }).catch(err => {
      res.status(HttpStatus.NO_CONTENT).send(err.parent);
    });
  }

}
