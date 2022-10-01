import { DepartmentsDto } from './dto/departments.dto';
import { Departments } from './models/departments.model';
import { DepartmentsService } from './departments.service';
import { Body, Controller, Delete, Get, Param, Post, HttpStatus, Res, Put } from '@nestjs/common';
import { Response } from 'express';

@Controller('departments')
export class DepartmentsController {
  constructor(private readonly DepartmentsService: DepartmentsService) { }

  @Post()
  async create(@Body() DepartmentsDto: DepartmentsDto, @Res() res: Response): Promise<void | Departments> {
    await this.DepartmentsService.create(DepartmentsDto)
      .then(rec => {
        this.DepartmentsService.findById(rec.id).then(t => {
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
  async update(@Param('code') code: string, @Body() updateDepartmentsDto: DepartmentsDto, @Res() res: Response) {
    await this.DepartmentsService.update(code, updateDepartmentsDto)
      .then(rec => {
        this.DepartmentsService.findOne(code).then(r => {
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
  async findAll(): Promise<Departments[]> {
    try {
      return await this.DepartmentsService.findAll();
    } catch (error) {
      return error;
    }
    
  }

  @Get(':code')
  async findOne(@Param('code') code: string): Promise<Departments> {
    return await this.DepartmentsService.findOne(code);
  }

  @Delete(':code')
  async remove(@Param('code') code: string, @Res() res: Response): Promise<void | Departments> {
    return await this.DepartmentsService.remove(code).then(r => {
      res.status(HttpStatus.ACCEPTED).send({ message: "Deleted", data: r });
    }).catch(err => {
      res.status(HttpStatus.NO_CONTENT).send(err.parent);
    });
  }

}
