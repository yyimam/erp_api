import { UserManagementModule } from './management/userManagement/userManagement.module';
import { UserManagement } from './management/userManagement/models/userManagement.model';
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
import { ItemSubCatListModule } from './utility/itemSubCategoryList/ItemSubCatList.module';
import { AcModule } from './entry/chartOfAccounts/ac.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      // port: 3306,
      // host: 'localhost',
      // username: 'halfmaneng_yousufdb',
      // password: 'ApQ.V@iP6q0BxbU3',
      // database: 'halfmaneng_yousufdb',
      host: '43.255.154.114',
      username: 'halfmaneng_user',
      password: '%09_xC*ee9Z&',
      database: 'halfmaneng_yousufdb',
      autoLoadModels: true,
      synchronize: false,
      // // pool: {
      // //   max: 5,
      // //   min: 0,
      // //   idle: 10000,
      // //   evict: 15000,
      // //   acquire: 30000
      // // },
      // dialectModule: require('mysql2')
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
    // UserManagementModule,
    AuthModule,
  ]
})

export class AppModule {}
