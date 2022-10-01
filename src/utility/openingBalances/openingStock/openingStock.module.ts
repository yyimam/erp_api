import { OpeningStock } from './models/OpeningStock.model';
import { OpeningStockController } from './OpeningStock.controllers';
import { OpeningStockService } from './OpeningStock.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([OpeningStock])],
  controllers: [OpeningStockController],
  providers: [OpeningStockService],
})

export class OpeningStockModule {}