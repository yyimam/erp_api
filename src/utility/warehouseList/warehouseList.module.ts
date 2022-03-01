import { WarehouseList } from './models/warehouseList.model';
import { WarehouseListController } from './warehouseList.controllers';
import { WarehouseListService } from './warehouseList.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([WarehouseList])],
  controllers: [WarehouseListController],
  providers: [WarehouseListService],
})

export class WarehouseListModule {}