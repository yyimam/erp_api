import { ItemCat } from './models/itemcat.model';
import { ItemCatController } from './itemcat.controllers';
import { ItemCatService } from './itemcat.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([ItemCat])],
  controllers: [ItemCatController],
  providers: [ItemCatService],
})

export class ItemCatModule {}