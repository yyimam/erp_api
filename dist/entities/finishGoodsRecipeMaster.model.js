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
exports.FinishGoodsRecipeMaster = void 0;
const product_model_1 = require("./../utility/products/models/product.model");
const finishGoodsRecipeList_model_1 = require("./../utility/finishGoodsRecipeList/models/finishGoodsRecipeList.model");
const sequelize_typescript_1 = require("sequelize-typescript");
let FinishGoodsRecipeMaster = class FinishGoodsRecipeMaster extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({ autoIncrement: true }),
    __metadata("design:type", Number)
], FinishGoodsRecipeMaster.prototype, "idno", void 0);
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], FinishGoodsRecipeMaster.prototype, "mainitemcode", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], FinishGoodsRecipeMaster.prototype, "disabled", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], FinishGoodsRecipeMaster.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column({ field: 'created_at' }),
    __metadata("design:type", Date)
], FinishGoodsRecipeMaster.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column({ field: 'updated_at' }),
    __metadata("design:type", Date)
], FinishGoodsRecipeMaster.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    sequelize_typescript_1.Column({ field: 'deleted_at' }),
    __metadata("design:type", Date)
], FinishGoodsRecipeMaster.prototype, "deletedAt", void 0);
__decorate([
    sequelize_typescript_1.HasOne(() => product_model_1.Product, 'code'),
    __metadata("design:type", product_model_1.Product)
], FinishGoodsRecipeMaster.prototype, "mainitemcodeDetails", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => finishGoodsRecipeList_model_1.FinishGoodsRecipeList),
    __metadata("design:type", Array)
], FinishGoodsRecipeMaster.prototype, "finishGoodsRecipeList", void 0);
FinishGoodsRecipeMaster = __decorate([
    sequelize_typescript_1.Table({
        tableName: 'assembling_master',
        timestamps: true
    })
], FinishGoodsRecipeMaster);
exports.FinishGoodsRecipeMaster = FinishGoodsRecipeMaster;
//# sourceMappingURL=finishGoodsRecipeMaster.model.js.map