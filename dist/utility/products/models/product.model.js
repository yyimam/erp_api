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
exports.Product = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Product = class Product extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column({
        autoIncrement: true,
        unique: true
    }),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Product.prototype, "code", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Product.prototype, "itemtype", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Product.prototype, "itemcat", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Product.prototype, "rate", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Product.prototype, "itemunit", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Product.prototype, "subitemcat", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Product.prototype, "brand", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Product.prototype, "prate", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Product.prototype, "origin", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Product.prototype, "pcspctn", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Product.prototype, "schmper", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Product.prototype, "xschmper", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Product.prototype, "bonuspcs", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Product.prototype, "article", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Product.prototype, "metrounit", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Product.prototype, "pkcgtype", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Product.prototype, "weight", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Product.prototype, "measurment", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Product.prototype, "barcode", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Product.prototype, "minqty", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Product.prototype, "density", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Product.prototype, "Scrap", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Product.prototype, "filename", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Product.prototype, "no_of_files", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Product.prototype, "batch_id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Product.prototype, "round_in_matreq", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Product.prototype, "old_code", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Product.prototype, "item_disabled", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column({ field: 'created_at' }),
    __metadata("design:type", Date)
], Product.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column({ field: 'updated_at' }),
    __metadata("design:type", Date)
], Product.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    sequelize_typescript_1.Column({ field: 'deleted_at' }),
    __metadata("design:type", Date)
], Product.prototype, "deletedAt", void 0);
Product = __decorate([
    sequelize_typescript_1.Table({ tableName: 'product' })
], Product);
exports.Product = Product;
//# sourceMappingURL=product.model.js.map