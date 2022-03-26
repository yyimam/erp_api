"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseInvoiceModule = void 0;
const billingDetails_entity_1 = require("./../../../entities/billingDetails.entity");
const billingMaster_entity_1 = require("../../../entities/billingMaster.entity");
const purchaseInvoice_controllers_1 = require("./purchaseInvoice.controllers");
const purchaseInvoice_service_1 = require("./purchaseInvoice.service");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
let PurchaseInvoiceModule = class PurchaseInvoiceModule {
};
PurchaseInvoiceModule = __decorate([
    common_1.Module({
        imports: [sequelize_1.SequelizeModule.forFeature([billingMaster_entity_1.BillingMaster]), sequelize_1.SequelizeModule.forFeature([billingDetails_entity_1.BillingDetails])],
        controllers: [purchaseInvoice_controllers_1.PurchaseInvoiceController],
        providers: [purchaseInvoice_service_1.PurchaseInvoiceService],
    })
], PurchaseInvoiceModule);
exports.PurchaseInvoiceModule = PurchaseInvoiceModule;
//# sourceMappingURL=purchaseInvoice.module.js.map