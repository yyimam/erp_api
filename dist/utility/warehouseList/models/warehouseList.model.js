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
exports.WarehouseList = void 0;
const billingDetails_entity_1 = require("./../../../entities/billingDetails.entity");
const sequelize_typescript_1 = require("sequelize-typescript");
const billingMaster_entity_1 = require("../../../entities/billingMaster.entity");
const orderMaster_entity_1 = require("../../../entities/orderMaster.entity");
let WarehouseList = class WarehouseList extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], WarehouseList.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column({}),
    __metadata("design:type", String)
], WarehouseList.prototype, "code", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], WarehouseList.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column({ field: 'created_at' }),
    __metadata("design:type", Date)
], WarehouseList.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column({ field: 'updated_at' }),
    __metadata("design:type", Date)
], WarehouseList.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    sequelize_typescript_1.Column({ field: 'deleted_at' }),
    __metadata("design:type", Date)
], WarehouseList.prototype, "deletedAt", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => orderMaster_entity_1.OrderMaster),
    __metadata("design:type", orderMaster_entity_1.OrderMaster)
], WarehouseList.prototype, "orderMaster", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => billingMaster_entity_1.BillingMaster),
    __metadata("design:type", billingMaster_entity_1.BillingMaster)
], WarehouseList.prototype, "billingMaster", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => billingDetails_entity_1.BillingDetails),
    __metadata("design:type", billingDetails_entity_1.BillingDetails)
], WarehouseList.prototype, "billingDetails", void 0);
WarehouseList = __decorate([
    sequelize_typescript_1.Table({ tableName: 'Warehouse_list' })
], WarehouseList);
exports.WarehouseList = WarehouseList;
//# sourceMappingURL=warehouseList.model.js.map