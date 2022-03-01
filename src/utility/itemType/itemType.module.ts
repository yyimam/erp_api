import { ItemType } from './models/ItemType.model';
import { ItemTypeController } from './ItemType.controllers';
import { ItemTypeService } from './ItemType.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([ItemType])],
  controllers: [ItemTypeController],
  providers: [ItemTypeService],
})

export class ItemTypeModule {}