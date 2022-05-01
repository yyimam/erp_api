import { CreateRoleDetailDto } from './dto/create-roleDetail.dto';
import { RoleDetail } from './models/roleDetail.model';
import { RoleDetailService } from './roleDetail.service';
import { Body, Controller, Delete, Get, Param, Post,HttpStatus, Res, Put} from '@nestjs/common';
import { Response } from 'express';
import { BelongsToMany } from 'sequelize-typescript';

@Controller('role-detail')
export class RoleDetailController {
  constructor(private readonly RoleDetailsService: RoleDetailService) {}

  @Post()
  async create(@Body() createRoleDetailDto: CreateRoleDetailDto, @Res() res: Response): Promise<void | RoleDetail> {
    return this.RoleDetailsService.create(createRoleDetailDto)
    .then(rec => {
      res.status(HttpStatus.CREATED).send(rec);
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Put(':code')
  async update(@Param('code') code: string,@Body() updateRoleDetailDto: CreateRoleDetailDto, @Res() res: Response) {
    this.RoleDetailsService.update(code,updateRoleDetailDto)
    .then(rec => {
        res.status(HttpStatus.OK).send({message: "record updated"});
    })
    .catch( err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
    });    
  }
  
  @Get()
  async findAll(): Promise<RoleDetail[]> {
    return this.RoleDetailsService.findAll();
  }

  @Get(':code')
  async findOne(@Param('code') code: string): Promise<RoleDetail> {
    return this.RoleDetailsService.findOne(code);
  }

  @Delete(':code')
  async remove(@Param('code') code: string): Promise<void> {
    return this.RoleDetailsService.remove(code);
  }
  
}
