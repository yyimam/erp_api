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
exports.RoleDetail = void 0;
const modulelist_model_1 = require("./../../modulelist/models/modulelist.model");
const sequelize_typescript_1 = require("sequelize-typescript");
let RoleDetail = class RoleDetail extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], RoleDetail.prototype, "idno", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], RoleDetail.prototype, "roleid", void 0);
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], RoleDetail.prototype, "moduletype", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], RoleDetail.prototype, "can_add", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], RoleDetail.prototype, "can_access", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], RoleDetail.prototype, "can_edit", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], RoleDetail.prototype, "can_delete", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], RoleDetail.prototype, "can_print", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], RoleDetail.prototype, "can_docs", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column({ field: 'created_at' }),
    __metadata("design:type", Date)
], RoleDetail.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column({ field: 'updated_at' }),
    __metadata("design:type", Date)
], RoleDetail.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    sequelize_typescript_1.Column({ field: 'deleted_at' }),
    __metadata("design:type", Date)
], RoleDetail.prototype, "deletedAt", void 0);
__decorate([
    sequelize_typescript_1.HasMany(() => modulelist_model_1.ModuleList),
    __metadata("design:type", Array)
], RoleDetail.prototype, "players", void 0);
RoleDetail = __decorate([
    sequelize_typescript_1.Table({ tableName: 'role_detail' })
], RoleDetail);
exports.RoleDetail = RoleDetail;
//# sourceMappingURL=roleDetail.model.js.map