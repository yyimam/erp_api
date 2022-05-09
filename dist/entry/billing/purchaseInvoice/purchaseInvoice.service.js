"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseInvoiceService = void 0;
const billingDetails_entity_1 = require("./../../../entities/billingDetails.entity");
const billingMaster_entity_1 = require("../../../entities/billingMaster.entity");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
let PurchaseInvoiceService = class PurchaseInvoiceService {
    constructor(BillingMasterModel) {
        this.BillingMasterModel = BillingMasterModel;
    }
    async create(CreatePurchaseInvoiceDto) {
        let t = CreatePurchaseInvoiceDto;
        return this.BillingMasterModel.create(t);
    }
    async update(code, UpdatePurchaseInvoiceDto) {
        let t = UpdatePurchaseInvoiceDto;
        return await this.BillingMasterModel.update(t, { where: { code: code } });
    }
    async findAll() {
        return this.BillingMasterModel.findAll();
    }
    async findOne(code) {
        return this.BillingMasterModel.findOne({
            include: [billingDetails_entity_1.BillingDetails],
            where: { idno: code }
        });
    }
};
PurchaseInvoiceService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(billingMaster_entity_1.BillingMaster)),
    __metadata("design:paramtypes", [Object])
], PurchaseInvoiceService);
exports.PurchaseInvoiceService = PurchaseInvoiceService;
//# sourceMappingURL=purchaseInvoice.service.js.map