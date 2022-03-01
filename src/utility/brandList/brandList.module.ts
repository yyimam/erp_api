import { BrandList } from './models/brandList.model';
import { BrandListController } from './brandListcontrollers';
import { BrandListService } from './BrandList.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([BrandList])],
  controllers: [BrandListController],
  providers: [BrandListService],
})

export class BrandListModule {}