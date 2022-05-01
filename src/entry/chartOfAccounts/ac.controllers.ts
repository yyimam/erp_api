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
        this.AcService.findById(rec.idno).then(t => {
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
  async update(@Param('code') code: string, @Body() acDto: AcDto, @Res() res: Response) {
    this.AcService.update(code, acDto)
      .then(rec => {
        this.AcService.findOne(code).then(r => {
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
  async findAll(): Promise<AC[]> {
    return this.AcService.findAll();
  }

  @Get(':code')
  async findOne(@Param('code') code: string): Promise<AC> {
    return this.AcService.findOne(code);
  }

  @Delete(':code')
  async remove(@Param('code') code: string, @Res() res: Response): Promise<void | AC> {
    return this.AcService.remove(code).then(r => {
      res.status(HttpStatus.ACCEPTED).send({ message: "Deleted", data: r });
    }).catch(err => {
      res.status(HttpStatus.NO_CONTENT).send(err.parent);
    });
  }

}
