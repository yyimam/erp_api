import { JwtAuthGuard } from '../../../auth/jwt-auth.guard';
import { LocalAuthGuard } from '../../../auth/local-auth.guard';
import { JwtService } from '@nestjs/jwt';
import { CreateUserManagementDto } from './dto/userManagement.dto';
import { UserManagement } from './models/UserManagement.model';
import { UserManagementService } from './userManagement.service';
import { Body, Controller, Delete, Get, Param, Post, HttpStatus, Res, Put, Request, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import * as bcrypt from 'bcrypt'

@Controller('user-management')
export class UserManagementController {
  constructor(private readonly UserManagementsService: UserManagementService) { }

  @Post()
  async create(@Body() createUserManagementDto: CreateUserManagementDto, @Res() res: Response): Promise<void | UserManagement> {
    return this.UserManagementsService.create(createUserManagementDto)
      .then(rec => {
        res.status(HttpStatus.CREATED).send(rec);
      })
      .catch(err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
      });
  }

  @Put(':code')
  async update(@Param('code') code: string, @Body() updateUserManagementDto: CreateUserManagementDto, @Res() res: Response) {
    this.UserManagementsService.update(code, updateUserManagementDto)
      .then(rec => {
        this.UserManagementsService.findOne(code).then(r => {
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
  async findAll(): Promise<UserManagement[]> {
    return this.UserManagementsService.findAll();
  }

  @Post('login')
  async login(@Request() req: any, @Res() res: Response): Promise<void | UserManagement> {
    const { email, password } = req.body;
    this.UserManagementsService.findByUserName(email.toLowerCase().trim())
      .then(async (user: any) => {
        if (user) {
          bcrypt.compare(password, user.userpwd.toString(), (err, result) => {
            if (result) {  
              const { userpwd, ...result } = user.dataValues;
              // res.status(HttpStatus.CREATED).send({ message: "login successfull", data: { access_token: this.jwtService.sign(result) } });
            } else {
              res.status(HttpStatus.UNAUTHORIZED).send({ message: "Incorrect username or password", data: {} });
            }
          })
        } else {
          res.status(HttpStatus.UNAUTHORIZED).send({ message: "Incorrect username or password", data: {} });
        }
      })
      .catch(err => {
        res.status(HttpStatus.BAD_REQUEST).send(err.parent);
      });
  }



  @Delete(':code')
  async remove(@Param('code') code: string, @Res() res: Response): Promise<void | UserManagement> {
    return this.UserManagementsService.remove(code).then(r => {
      res.status(HttpStatus.ACCEPTED).send({ message: "Deleted", data: r });
    }).catch(err => {
      res.status(HttpStatus.NO_CONTENT).send(err.parent);
    });
  }

}
