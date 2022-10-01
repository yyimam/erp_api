"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const openingStock_module_1 = require("./utility/openingBalances/openingStock/openingStock.module");
const materialReturnBack_module_1 = require("./entry/inventory/materialReturnBack/materialReturnBack.module");
const goodsReturnToSupplier_module_1 = require("./entry/inventory/goodsReturnToSupplier/goodsReturnToSupplier.module");
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
const products_module_1 = require("./utility/products/products.module");
const itemcat_module_1 = require("./utility/itemCategory/itemcat.module");
const ItemSubCatList_module_1 = require("./utility/itemSubCategoryList/ItemSubCatList.module");
const ac_module_1 = require("./entry/chartOfAccounts/ac.module");
const departments_module_1 = require("./utility/departments/departments.module");
const auth_module_1 = require("./auth/auth.module");
const customerOrder_module_1 = require("./entry/inventory/customerOrder/customerOrder.module");
const purchaseOrder_module_1 = require("./entry/inventory/purchaseOrder/purchaseOrder.module");
const goodsReceivingNote_module_1 = require("./entry/inventory/goodsReceivingNote/goodsReceivingNote.module");
const goodsDeliveryChallanNote_module_1 = require("./entry/inventory/goodsDeliveryChallan/goodsDeliveryChallanNote.module");
const goodsReturnFromCustomer_module_1 = require("./entry/inventory/goodsReturnFromCustomer/goodsReturnFromCustomer.module");
const materialIssuing_module_1 = require("./entry/inventory/materialIssuing/materialIssuing.module");
const materialIssuingRequestForm_module_1 = require("./entry/inventory/materialIssuingRequestForm/materialIssuingRequestForm.module");
const stockTransfer_module_1 = require("./entry/inventory/stockTransfer/stockTransfer.module");
const finishedGoodsProduction_module_1 = require("./entry/inventory/finishedGoodsProduction/finishedGoodsProduction.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'mysql',
                host: '43.255.154.114',
                username: 'halfmaneng_user',
                password: '%09_xC*ee9Z&',
                database: 'halfmaneng_yousufdb',
                autoLoadModels: true,
                synchronize: false,
                dialectModule: require('mysql2')
            }),
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
            ac_module_1.AcModule,
            departments_module_1.DepartmentsModule,
            auth_module_1.AuthModule,
            openingStock_module_1.OpeningStockModule,
            customerOrder_module_1.CustomerOrdereModule,
            purchaseOrder_module_1.PurchaseOrdereModule,
            goodsReceivingNote_module_1.GoodsReceivingNoteModule,
            goodsDeliveryChallanNote_module_1.GoodsDeliveryChallanModule,
            goodsReturnToSupplier_module_1.GoodsReturnToSupplierModule,
            goodsReturnFromCustomer_module_1.GoodsReturnFromCustomerModule,
            materialIssuing_module_1.MaterialIssuingModule,
            materialReturnBack_module_1.MaterialReturnBackModule,
            materialIssuingRequestForm_module_1.MaterialIssuingRequestFormModule,
            stockTransfer_module_1.StockTransferModule,
            finishedGoodsProduction_module_1.FinishedGoodsProductionModule
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map