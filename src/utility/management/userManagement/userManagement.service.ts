import { UserManagement } from './models/UserManagement.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserManagementDto } from './dto/userManagement.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserManagementService {
  
  constructor(
    @InjectModel(UserManagement)
    private readonly UserManagementModel: typeof UserManagement,
  ) {}

  async create(CreateUserManagementDto: CreateUserManagementDto): Promise<UserManagement> {
    const saltRounds = 10;
    const encrypt = await bcrypt.hash(CreateUserManagementDto.userpwd, saltRounds);    
    let t:{}= {...CreateUserManagementDto,...{userpwd: encrypt}}
    return this.UserManagementModel.create(t);
  }

  async update(code: string, UpdateUserManagementDto: CreateUserManagementDto): Promise<any>{
    let t:{}= UpdateUserManagementDto;
    return await this.UserManagementModel.update(t,{where:{code:code}});
  }

  async findAll(): Promise<UserManagement[]> {
    return this.UserManagementModel.findAll();
  }

  async findOne(userid: string): Promise<UserManagement> {
    return this.UserManagementModel.findOne({
      where: {
        userid,
      },
    });
  }

  async findByUserName(email: string): Promise<UserManagement> {
    return this.UserManagementModel.findOne({
      where: {
        email
      },
    });
  }



  async remove(id: string): Promise<UserManagement> {
    const type = await this.findOne(id);
    let u = await type.destroy().then(t => t);
    return type;
  }

  async validateUser(email: string, pass: string): Promise<any> {
    
    const user = await this.findByUserName(email);
    console.log("recos", user);
    if (user && user.userpwd === pass) {
      const { userpwd, ...result } = user;
      return result;
    }
    return null;
  }
  
}
