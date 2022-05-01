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
exports.finishGoodsRecipeList = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let finishGoodsRecipeList = class finishGoodsRecipeList extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], finishGoodsRecipeList.prototype, "idno", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], finishGoodsRecipeList.prototype, "mainitemcode", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], finishGoodsRecipeList.prototype, "subitemcode", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], finishGoodsRecipeList.prototype, "description", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], finishGoodsRecipeList.prototype, "qty", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], finishGoodsRecipeList.prototype, "sysdate", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], finishGoodsRecipeList.prototype, "entryno", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], finishGoodsRecipeList.prototype, "edate", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], finishGoodsRecipeList.prototype, "disabled", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], finishGoodsRecipeList.prototype, "wastage_qty", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column({ field: 'created_at' }),
    __metadata("design:type", Date)
], finishGoodsRecipeList.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column({ field: 'updated_at' }),
    __metadata("design:type", Date)
], finishGoodsRecipeList.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    sequelize_typescript_1.Column({ field: 'deleted_at' }),
    __metadata("design:type", Date)
], finishGoodsRecipeList.prototype, "deletedAt", void 0);
finishGoodsRecipeList = __decorate([
    sequelize_typescript_1.Table({ tableName: 'assembling_list' })
], finishGoodsRecipeList);
exports.finishGoodsRecipeList = finishGoodsRecipeList;
//# sourceMappingURL=finishGoodsRecipeList.model%20copy.js.map