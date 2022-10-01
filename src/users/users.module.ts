import { UserManagement } from '../utility/management/userManagement/models/userManagement.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  imports:[
    SequelizeModule.forFeature([UserManagement]),
  ],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}