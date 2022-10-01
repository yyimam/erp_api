import { Departments } from './models/departments.model';
import { DepartmentsController } from './departments.controllers';
import { DepartmentsService } from './departments.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Departments])],
  controllers: [DepartmentsController],
  providers: [DepartmentsService],
})

export class DepartmentsModule {}