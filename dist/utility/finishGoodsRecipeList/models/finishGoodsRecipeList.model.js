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
var FinishGoodsRecipeList_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinishGoodsRecipeList = void 0;
const finishGoodsRecipeMaster_model_1 = require("./../../../entities/finishGoodsRecipeMaster.model");
const sequelize_typescript_1 = require("sequelize-typescript");
let FinishGoodsRecipeList = FinishGoodsRecipeList_1 = class FinishGoodsRecipeList extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({
        autoIncrement: true,
        field: 'idno'
    }),
    __metadata("design:type", Number)
], FinishGoodsRecipeList.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.ForeignKey(() => finishGoodsRecipeMaster_model_1.FinishGoodsRecipeMaster),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], FinishGoodsRecipeList.prototype, "mainitemcode", void 0);
__decorate([
    sequelize_typescript_1.ForeignKey(() => FinishGoodsRecipeList_1),
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], FinishGoodsRecipeList.prototype, "subitemcode", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], FinishGoodsRecipeList.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], FinishGoodsRecipeList.prototype, "qty", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], FinishGoodsRecipeList.prototype, "sysdate", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], FinishGoodsRecipeList.prototype, "entryno", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], FinishGoodsRecipeList.prototype, "edate", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], FinishGoodsRecipeList.prototype, "disabled", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], FinishGoodsRecipeList.prototype, "wastage_qty", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column({ field: 'created_at' }),
    __metadata("design:type", Date)
], FinishGoodsRecipeList.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column({ field: 'updated_at' }),
    __metadata("design:type", Date)
], FinishGoodsRecipeList.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    sequelize_typescript_1.Column({ field: 'deleted_at' }),
    __metadata("design:type", Date)
], FinishGoodsRecipeList.prototype, "deletedAt", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => finishGoodsRecipeMaster_model_1.FinishGoodsRecipeMaster),
    __metadata("design:type", finishGoodsRecipeMaster_model_1.FinishGoodsRecipeMaster)
], FinishGoodsRecipeList.prototype, "FinishGoodsRecipeMaster", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => FinishGoodsRecipeList_1, 'subitemcode'),
    __metadata("design:type", Array)
], FinishGoodsRecipeList.prototype, "finishGoodsRecipeList2", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => FinishGoodsRecipeList_1, { as: '_subitemcode', foreignKey: 'mainitemcode' }),
    __metadata("design:type", FinishGoodsRecipeList)
], FinishGoodsRecipeList.prototype, "finishGoodsRecipeList", void 0);
FinishGoodsRecipeList = FinishGoodsRecipeList_1 = __decorate([
    sequelize_typescript_1.Table({
        tableName: 'assembling_list',
        timestamps: true
    })
], FinishGoodsRecipeList);
exports.FinishGoodsRecipeList = FinishGoodsRecipeList;
//# sourceMappingURL=finishGoodsRecipeList.model.js.map