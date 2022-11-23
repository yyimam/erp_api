import { ItemType } from './models/itemType.model';
import { ItemTypeController } from './itemType.controllers';
import { ItemTypeService } from './itemType.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([ItemType])],
  controllers: [ItemTypeController],
  providers: [ItemTypeService],
})

export class ItemTypeModule {}