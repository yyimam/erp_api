import { ItemUnit } from './models/itemUnit.model';
import { ItemUnitController } from './itemUnit.controllers';
import { ItemUnitService } from './itemUnit.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([ItemUnit])],
  controllers: [ItemUnitController],
  providers: [ItemUnitService],
})

export class ItemUnitModule {}