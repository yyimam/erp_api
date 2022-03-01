import { ItemSubCatList } from './models/itemSubCatList.model';
import { ItemSubCatListController } from './itemSubCatList.controllers';
import { ItemSubCatListService } from './itemSubCatList.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([ItemSubCatList])],
  controllers: [ItemSubCatListController],
  providers: [ItemSubCatListService],
})

export class ItemSubCatListModule {}