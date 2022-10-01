import { AcDto } from './dto/ac.dto';
import { AC } from './models/ac.model';
import { AcService } from './ac.service';
import { Body, Controller, Delete, Get, Param, Post, HttpStatus, Res, Put } from '@nestjs/common';
import { Response } from 'express';

@Controller('ac')
export class AcController {
  constructor(private readonly AcService: AcService) { }

  @Post()
  async create(@Body() acDto: AcDto, @Res() res: Response): Promise<void | AC> {
    return this.AcService.create(acDto)
      .then(rec => {
        res.status(HttpStatus.CREATED).send(rec);
      })
      .catch(err => {
        res.status(HttpStatus.BAD_REQUEST).send(err);
      });
  }

  @Put(':code')
  async update(@Param('code') code: string, @Body() acDto: AcDto, @Res() res: Response) {
    this.AcService.update(code, acDto)
      .then(rec => {
        this.AcService.findOne(code).then(r => {
          res.status(HttpStatus.OK).send({ message: "Record Updated", data: r });
        }).catch(err => {
          res.status(HttpStatus.NO_CONTENT).send({ message: "Conent Not Found", data: err.parent });
        })
      })
      .catch(err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
      });
  }

  @Get()
  async findAll(): Promise<AC[]> {
    return await this.AcService.findAll();
  }

  @Get("ac-list")
  async getAllChildRecord(): Promise<AC[]> {
    return await this.AcService.getAllChildRecord();
  }

  @Get(':code')
  async findOne(@Param('code') code: string): Promise<AC> {
    return await this.AcService.findOne(code);
  }

  @Delete(':code')
  async remove(@Param('code') id: number, @Res() res: Response): Promise<void | AC> {
    return await this.AcService.remove(id).then(r => {
      if(r){
        res.status(HttpStatus.ACCEPTED).send({ message: "Deleted", data: r });  
      }else{
        res.status(HttpStatus.NO_CONTENT).send({ message: "Error", data: "No Record found" });
      }
    }).catch(err => {
      res.status(HttpStatus.NO_CONTENT).send({ message: "Error", data: err });
    });
  }

}
