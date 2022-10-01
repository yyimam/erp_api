import { UserManagement } from './models/userManagement.model';
import { UserManagementController } from './userManagement.controllers';
import { UserManagementService } from './userManagement.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forFeature([UserManagement]),
    
  ],
  controllers: [UserManagementController],
  providers: [UserManagementService],
  exports:[UserManagementService]
})

export class UserManagementModule { }