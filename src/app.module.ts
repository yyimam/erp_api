import { OpeningStockModule } from './utility/openingBalances/openingStock/openingStock.module';
import { MaterialReturnBackModule } from './entry/inventory/materialReturnBack/materialReturnBack.module';
import { GoodsReturnToSupplierModule } from './entry/inventory/goodsReturnToSupplier/goodsReturnToSupplier.module';
// import { UserManagement } from './utility/management/userManagement/models/userManagement.model';
import { PurchaseInvoiceModule } from './entry/billing/purchaseInvoice/purchaseInvoice.module';
import { ItemUnitModule } from './utility/itemUnit/itemUnit.module';
import { ItemTypeModule } from './utility/itemType/itemType.module';
import { finishGoodsRecipeListModule } from './utility/finishGoodsRecipeList/finishGoodsRecipeList.module';
import { ModuleListModule } from './utility/modulelist/modulelist.module';
import { RoleDetailModule } from './utility/roleDetail/roleDetail.module';
import { WarehouseListModule } from './utility/warehouseList/warehouseList.module';
import { BrandListModule } from './utility/brandList/brandList.module';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsModule } from './utility/products/products.module';
import { ItemCatModule } from './utility/itemCategory/itemcat.module';
import { ItemSubCatListModule } from './utility/itemSubCategoryList/itemSubCatList.module';
import { AcModule } from './entry/chartOfAccounts/ac.module';
import { DepartmentsModule } from './utility/departments/departments.module';

import { AuthModule } from './auth/auth.module';
import { CustomerOrdereModule } from './entry/inventory/customerOrder/customerOrder.module';
import { PurchaseOrdereModule } from './entry/inventory/purchaseOrder/purchaseOrder.module';
import { GoodsReceivingNoteModule } from './entry/inventory/goodsReceivingNote/goodsReceivingNote.module';
import { GoodsDeliveryChallanModule } from './entry/inventory/goodsDeliveryChallan/goodsDeliveryChallanNote.module';
import { GoodsReturnFromCustomerModule } from './entry/inventory/goodsReturnFromCustomer/goodsReturnFromCustomer.module';
import { MaterialIssuingModule } from './entry/inventory/materialIssuing/materialIssuing.module';
import { MaterialIssuingRequestFormModule } from './entry/inventory/materialIssuingRequestForm/materialIssuingRequestForm.module';
import { StockTransferModule } from './entry/inventory/stockTransfer/stockTransfer.module';
import { FinishedGoodsProductionModule } from './entry/inventory/finishedGoodsProduction/finishedGoodsProduction.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '43.255.154.114',
      username: 'halfmaneng_user',
      password: '%09_xC*ee9Z&',
      database: 'halfmaneng_yousufdb',
      autoLoadModels: true,
      synchronize: false,
      dialectModule: require('mysql2')
    }),
    ProductsModule,
    ItemCatModule,
    ItemSubCatListModule,
    BrandListModule,
    WarehouseListModule,
    ModuleListModule,
    RoleDetailModule,
    finishGoodsRecipeListModule,
    ItemTypeModule,
    ItemUnitModule,
    PurchaseInvoiceModule,
    AcModule,
    DepartmentsModule,
    AuthModule,
    OpeningStockModule,
    CustomerOrdereModule,
    PurchaseOrdereModule,
    GoodsReceivingNoteModule,
    GoodsDeliveryChallanModule,
    GoodsReturnToSupplierModule,
    GoodsReturnFromCustomerModule,
    MaterialIssuingModule,
    MaterialReturnBackModule,
    MaterialIssuingRequestFormModule,
    StockTransferModule,
    FinishedGoodsProductionModule
  ]
})

export class AppModule { }
