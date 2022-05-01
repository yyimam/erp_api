import { AC } from './models/ac.model';
import { AcController } from './ac.controllers';
import {  AcService } from './ac.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([AC])],
  controllers: [AcController],
  providers: [AcService],
})

export class AcModule {}