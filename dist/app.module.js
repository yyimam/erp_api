"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const purchaseInvoice_module_1 = require("./entry/billing/purchaseInvoice/purchaseInvoice.module");
const itemUnit_module_1 = require("./utility/itemUnit/itemUnit.module");
const itemType_module_1 = require("./utility/itemType/itemType.module");
const finishGoodsRecipeList_module_1 = require("./utility/finishGoodsRecipeList/finishGoodsRecipeList.module");
const modulelist_module_1 = require("./utility/modulelist/modulelist.module");
const roleDetail_module_1 = require("./utility/roleDetail/roleDetail.module");
const warehouseList_module_1 = require("./utility/warehouseList/warehouseList.module");
const brandList_module_1 = require("./utility/brandList/brandList.module");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const users_module_1 = require("./users/users.module");
const products_module_1 = require("./utility/products/products.module");
const itemcat_module_1 = require("./utility/itemCategory/itemcat.module");
const ItemSubCatList_module_1 = require("./utility/itemSubCategoryList/ItemSubCatList.module");
const ac_module_1 = require("./entry/chartOfAccounts/ac.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'mysql',
                host: 'localhost',
                username: 'halfmaneng_yousufdb',
                password: 'ApQ.V@iP6q0BxbU3',
                database: 'halfmaneng_yousufdb',
                autoLoadModels: true,
                synchronize: true,
                pool: {
                    max: 15,
                    min: 5,
                    idle: 20000,
                    evict: 15000,
                    acquire: 30000
                },
            }),
            users_module_1.UsersModule,
            products_module_1.ProductsModule,
            itemcat_module_1.ItemCatModule,
            ItemSubCatList_module_1.ItemSubCatListModule,
            brandList_module_1.BrandListModule,
            warehouseList_module_1.WarehouseListModule,
            modulelist_module_1.ModuleListModule,
            roleDetail_module_1.RoleDetailModule,
            finishGoodsRecipeList_module_1.finishGoodsRecipeListModule,
            itemType_module_1.ItemTypeModule,
            itemUnit_module_1.ItemUnitModule,
            purchaseInvoice_module_1.PurchaseInvoiceModule,
            ac_module_1.AcModule
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map