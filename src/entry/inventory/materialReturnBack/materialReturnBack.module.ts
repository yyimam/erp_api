import { BillingDetails } from '../../../entities/billingDetails.entity';
import { BillingMaster } from '../../../entities/billingMaster.entity';
import { MaterialReturnBackController } from './materialReturnBack.controllers';
import { MaterialReturnBackService } from './materialReturnBack.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from 'src/utility/products/models/product.model';
import { AC } from 'src/entry/chartOfAccounts/models/ac.model';
import { WarehouseList } from 'src/utility/warehouseList/models/warehouseList.model';

@Module({
  imports: [
    SequelizeModule.forFeature([BillingMaster]),
    SequelizeModule.forFeature([BillingDetails]),
    SequelizeModule.forFeature([Product]), 
    SequelizeModule.forFeature([AC]),
    SequelizeModule.forFeature([WarehouseList])
  ],
  controllers: [MaterialReturnBackController],
  providers: [MaterialReturnBackService],
})

export class MaterialReturnBackModule {}