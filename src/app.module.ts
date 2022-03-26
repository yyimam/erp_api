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
import { UsersModule } from './users/users.module';
import { ProductsModule } from './utility/products/products.module';
import { ItemCatModule } from './utility/itemCategory/itemcat.module';
import { ItemSubCatListModule } from './utility/itemSubCategoryList/ItemSubCatList.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '43.255.154.114',
      // host: 'localhost',
      // host:'209.188.21.134',
      // port: 3306,
      username: 'halfmaneng_user',
      password: '%09_xC*ee9Z&',
      database: 'halfmaneng_yousufdb',
      // username: 'user',
      // password: 'ApQ.V@iP6q0BxbU3',
      // database: 'yousufdb',
      autoLoadModels: true,
      synchronize: true,
      // pool: {
      //   max: 15,
      //   min: 5,
      //   idle: 20000,
      //   evict: 15000,
      //   acquire: 30000
      // },
    }),
    UsersModule,
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
    PurchaseInvoiceModule
  ]
})

export class AppModule {}
