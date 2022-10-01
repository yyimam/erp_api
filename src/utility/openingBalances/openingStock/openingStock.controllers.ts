import { OpeningStockDto } from './dto/openingStock.dto';
import { OpeningStock } from './models/openingStock.model';
import { OpeningStockService } from './OpeningStock.service';
import { Body, Controller, Delete, Get, Param, Post, HttpStatus, Res, Put } from '@nestjs/common';
import { Response } from 'express';

@Controller('opening-stock')
export class OpeningStockController {
  constructor(private readonly OpeningStocksService: OpeningStockService) { }

  @Post()
  async create(@Body() OpeningStockDto: OpeningStockDto, @Res() res: Response): Promise<void | OpeningStock> {
    await this.OpeningStocksService.create(OpeningStockDto)
      .then(rec => {
        res.status(HttpStatus.CREATED).send(rec);
      })
      .catch(err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
      });
  }

  @Put(':code')
  async update(@Param('code') code: string, @Body() updateOpeningStockDto: OpeningStockDto, @Res() res: Response) {
    await this.OpeningStocksService.update(code, updateOpeningStockDto)
      .then( rec => {
        this.OpeningStocksService.findOne(code).then(r => {
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
  async findAll(): Promise<OpeningStock[]> {
    try {
      console.log("recordss")
      return await this.OpeningStocksService.findAll();
    } catch (error) {
      return error;
    }
  }

  @Get(':code')
  async findOne(@Param('code') code: string): Promise<OpeningStock> {
    return await this.OpeningStocksService.findOne(code);
  }

  @Delete(':code')
  async remove(@Param('code') code: string, @Res() res: Response): Promise<void | OpeningStock> {
    await this.OpeningStocksService.remove(code).then(r => {
      res.status(HttpStatus.ACCEPTED).send({ message: "Deleted", data: r });
    }).catch(err => {
      res.status(HttpStatus.NO_CONTENT).send(err.parent);
    });
  }

}
