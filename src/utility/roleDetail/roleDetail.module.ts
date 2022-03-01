import { RoleDetail } from './models/roleDetail.model';
import { RoleDetailController } from './roleDetail.controllers';
import { RoleDetailService } from './roleDetail.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([RoleDetail])],
  controllers: [RoleDetailController],
  providers: [RoleDetailService],
})

export class RoleDetailModule {}