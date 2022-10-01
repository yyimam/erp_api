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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingDetails = void 0;
const warehouseList_model_1 = require("../utility/warehouseList/models/warehouseList.model");
const billingMaster_entity_1 = require("./billingMaster.entity");
const sequelize_typescript_1 = require("sequelize-typescript");
const product_model_1 = require("../utility/products/models/product.model");
let BillingDetails = class BillingDetails extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "idno", void 0);
__decorate([
    sequelize_typescript_1.Column,
    sequelize_typescript_1.ForeignKey(() => billingMaster_entity_1.BillingMaster),
    __metadata("design:type", Number)
], BillingDetails.prototype, "pidno", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingDetails.prototype, "estatus", void 0);
__decorate([
    sequelize_typescript_1.Column,
    sequelize_typescript_1.ForeignKey(() => product_model_1.Product),
    __metadata("design:type", String)
], BillingDetails.prototype, "itemcode", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingDetails.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingDetails.prototype, "itemunit", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "amount", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "sed", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "sedamount", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "gst", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "gstamount", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "netamount", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "itemdiscount", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], BillingDetails.prototype, "expiry_date", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "loose_qty", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "qty_in_pcs", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "pcspctn", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "bonuspcs", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "itemdiscount_P", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "schmper", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "schmamt", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "xschmper", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "xschmamt", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "oschmper", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "oschmamt", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "qty", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "rate", void 0);
__decorate([
    sequelize_typescript_1.Column,
    sequelize_typescript_1.ForeignKey(() => warehouseList_model_1.WarehouseList),
    __metadata("design:type", String)
], BillingDetails.prototype, "Warehouse_Code", void 0);
__decorate([
    sequelize_typescript_1.Column,
    sequelize_typescript_1.ForeignKey(() => product_model_1.Product),
    __metadata("design:type", String)
], BillingDetails.prototype, "fitemcode", void 0);
__decorate([
    sequelize_typescript_1.Column,
    sequelize_typescript_1.ForeignKey(() => warehouseList_model_1.WarehouseList),
    __metadata("design:type", String)
], BillingDetails.prototype, "Warehouse_CodeInto", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "rate_change", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "MRP", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "QC_Posted", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingDetails.prototype, "QC_Remarks", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], BillingDetails.prototype, "QC_Post_Date", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "batch_qty", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "iss_qty", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "req_qty", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingDetails.prototype, "batch_id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "promotion_sales", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingDetails.prototype, "Batch_Code", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "itaxAmount", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "qty_yards", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "rate_yards", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "amount_yards", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingDetails.prototype, "tailor_ac", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingDetails.prototype, "particular", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "size", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingDetails.prototype, "debit_Ac", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingDetails.prototype, "credit_Ac", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingDetails.prototype, "discountD", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column({ field: 'created_at' }),
    __metadata("design:type", Date)
], BillingDetails.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column({ field: 'updated_at' }),
    __metadata("design:type", Date)
], BillingDetails.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    sequelize_typescript_1.Column({ field: 'deleted_at' }),
    __metadata("design:type", Date)
], BillingDetails.prototype, "deletedAt", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => billingMaster_entity_1.BillingMaster),
    __metadata("design:type", billingMaster_entity_1.BillingMaster)
], BillingDetails.prototype, "billingDetails", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => product_model_1.Product, { as: '_itemcode', foreignKey: 'itemcode' }),
    __metadata("design:type", product_model_1.Product)
], BillingDetails.prototype, "product", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => product_model_1.Product, { as: '_fitemcode', foreignKey: 'fitemcode' }),
    __metadata("design:type", product_model_1.Product)
], BillingDetails.prototype, "product2", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => warehouseList_model_1.WarehouseList, { as: '_Warehouse_Code', foreignKey: 'Warehouse_Code' }),
    __metadata("design:type", warehouseList_model_1.WarehouseList)
], BillingDetails.prototype, "WarehouseList", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => warehouseList_model_1.WarehouseList, { as: '_Warehouse_CodeInto', foreignKey: 'Warehouse_CodeInto' }),
    __metadata("design:type", warehouseList_model_1.WarehouseList)
], BillingDetails.prototype, "WarehouseList2", void 0);
BillingDetails = __decorate([
    sequelize_typescript_1.Table({ tableName: 'billing_detail' })
], BillingDetails);
exports.BillingDetails = BillingDetails;
//# sourceMappingURL=billingDetails.entity.js.map