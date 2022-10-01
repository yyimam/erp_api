import { BillingDetails } from '../../../entities/billingDetails.entity';
import { BillingMaster } from '../../../entities/billingMaster.entity';
import { GoodsReturnFromCustomerController } from './goodsReturnFromCustomer.controllers';
import { GoodsReturnFromCustomerService } from './goodsReturnFromCustomer.service';
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
  controllers: [GoodsReturnFromCustomerController],
  providers: [GoodsReturnFromCustomerService],
})

export class GoodsReturnFromCustomerModule {}