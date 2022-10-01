import { CustomerOrderController } from './customerOrder.controllers';
import { CustomerOrderService } from './customerOrder.service';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrderDetails } from 'src/entities/orderDetails.entity';
import { OrderMaster } from 'src/entities/orderMaster.entity';
import { Product } from 'src/utility/products/models/product.model';
import { AC } from 'src/entry/chartOfAccounts/models/ac.model';
import { WarehouseList } from 'src/utility/warehouseList/models/warehouseList.model';

@Module({
  imports: [
    SequelizeModule.forFeature([OrderMaster]), 
    SequelizeModule.forFeature([OrderDetails]), 
    SequelizeModule.forFeature([Product]), 
    SequelizeModule.forFeature([AC]),
    SequelizeModule.forFeature([WarehouseList])
  ],
  
  controllers: [CustomerOrderController],
  providers: [CustomerOrderService],
})

export class CustomerOrdereModule { }