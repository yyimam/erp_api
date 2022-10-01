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
exports.BillingMaster = void 0;
const warehouseList_model_1 = require("../utility/warehouseList/models/warehouseList.model");
const ac_model_1 = require("./../entry/chartOfAccounts/models/ac.model");
const billingDetails_entity_1 = require("./billingDetails.entity");
const sequelize_typescript_1 = require("sequelize-typescript");
let BillingMaster = class BillingMaster extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingMaster.prototype, "idno", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingMaster.prototype, "EntryNo", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingMaster.prototype, "billno", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], BillingMaster.prototype, "edate", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], BillingMaster.prototype, "sysdate", void 0);
__decorate([
    sequelize_typescript_1.Column,
    sequelize_typescript_1.ForeignKey(() => ac_model_1.AC),
    __metadata("design:type", String)
], BillingMaster.prototype, "party_ac", void 0);
__decorate([
    sequelize_typescript_1.Column,
    sequelize_typescript_1.ForeignKey(() => ac_model_1.AC),
    __metadata("design:type", String)
], BillingMaster.prototype, "dr_cr_ac", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingMaster.prototype, "dcno", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingMaster.prototype, "estatus", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingMaster.prototype, "order_no", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingMaster.prototype, "remarks", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingMaster.prototype, "gst", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingMaster.prototype, "gstAmount", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingMaster.prototype, "gstinv", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingMaster.prototype, "gst_ac", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingMaster.prototype, "sed", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingMaster.prototype, "sedAmount", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingMaster.prototype, "sed_ac", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingMaster.prototype, "disc_p", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingMaster.prototype, "discount", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingMaster.prototype, "grossamount", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingMaster.prototype, "netamount", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingMaster.prototype, "etime", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingMaster.prototype, "terms", void 0);
__decorate([
    sequelize_typescript_1.Column,
    sequelize_typescript_1.ForeignKey(() => warehouseList_model_1.WarehouseList),
    __metadata("design:type", String)
], BillingMaster.prototype, "Warehouse_Code", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingMaster.prototype, "doentryno", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], BillingMaster.prototype, "ent_date", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingMaster.prototype, "Credit_Days", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingMaster.prototype, "Circular_No", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingMaster.prototype, "Vehicle_No", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], BillingMaster.prototype, "duedate", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingMaster.prototype, "Vendor_No", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingMaster.prototype, "r_No", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingMaster.prototype, "rvno", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], BillingMaster.prototype, "rvdate", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingMaster.prototype, "Shop", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingMaster.prototype, "sol_com", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingMaster.prototype, "sol_comA", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingMaster.prototype, "osb_com", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingMaster.prototype, "osb_comA", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingMaster.prototype, "freight", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingMaster.prototype, "Transporter", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingMaster.prototype, "porder_no", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingMaster.prototype, "return_type", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingMaster.prototype, "oldcirno", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingMaster.prototype, "dincentp", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingMaster.prototype, "dincentamt", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingMaster.prototype, "dincentac", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingMaster.prototype, "grn_no", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingMaster.prototype, "dc_no", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingMaster.prototype, "posted", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingMaster.prototype, "biltyno", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingMaster.prototype, "mir_No", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingMaster.prototype, "gor_No", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingMaster.prototype, "container_no", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingMaster.prototype, "seal_no", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingMaster.prototype, "period", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingMaster.prototype, "bilty_filename", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingMaster.prototype, "itemdescription", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingMaster.prototype, "grn_closed", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingMaster.prototype, "fitem_code", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingMaster.prototype, "batch_qty", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingMaster.prototype, "Recipe_No", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingMaster.prototype, "batch_id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingMaster.prototype, "batch_id_no", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingMaster.prototype, "mat_type", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingMaster.prototype, "dc_no_SR", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingMaster.prototype, "S_dc_no", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingMaster.prototype, "transporter_name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingMaster.prototype, "alert_posted", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingMaster.prototype, "file_name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], BillingMaster.prototype, "gpno", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], BillingMaster.prototype, "doc_attached", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], BillingMaster.prototype, "post_date", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column({ field: 'created_at' }),
    __metadata("design:type", Date)
], BillingMaster.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column({ field: 'updated_at' }),
    __metadata("design:type", Date)
], BillingMaster.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    sequelize_typescript_1.Column({ field: 'deleted_at' }),
    __metadata("design:type", Date)
], BillingMaster.prototype, "deletedAt", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => billingDetails_entity_1.BillingDetails),
    __metadata("design:type", Array)
], BillingMaster.prototype, "billingDetails", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => ac_model_1.AC),
    __metadata("design:type", ac_model_1.AC)
], BillingMaster.prototype, "ac", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => warehouseList_model_1.WarehouseList),
    __metadata("design:type", warehouseList_model_1.WarehouseList)
], BillingMaster.prototype, "warehouseList", void 0);
BillingMaster = __decorate([
    sequelize_typescript_1.Table({ tableName: 'billing_master' })
], BillingMaster);
exports.BillingMaster = BillingMaster;
//# sourceMappingURL=billingMaster.entity.js.map