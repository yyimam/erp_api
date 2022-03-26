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
exports.ModuleList = void 0;
const roleDetail_model_1 = require("./../../roleDetail/models/roleDetail.model");
const sequelize_typescript_1 = require("sequelize-typescript");
let ModuleList = class ModuleList extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.ForeignKey(() => roleDetail_model_1.RoleDetail),
    sequelize_typescript_1.Column({
        type: sequelize_typescript_1.DataType.STRING
    }),
    __metadata("design:type", String)
], ModuleList.prototype, "moduletype", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ModuleList.prototype, "modulename", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ModuleList.prototype, "modulenature", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ModuleList.prototype, "moduledesc", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ModuleList.prototype, "menus", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ModuleList.prototype, "accountslink", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ModuleList.prototype, "vouchertype", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ModuleList.prototype, "formcolor", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ModuleList.prototype, "gridbackcolor", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], ModuleList.prototype, "sysdate", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ModuleList.prototype, "dependent", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ModuleList.prototype, "serialNo", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ModuleList.prototype, "idNo", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column({ field: 'created_at' }),
    __metadata("design:type", Date)
], ModuleList.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column({ field: 'updated_at' }),
    __metadata("design:type", Date)
], ModuleList.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    sequelize_typescript_1.Column({ field: 'deleted_at' }),
    __metadata("design:type", Date)
], ModuleList.prototype, "deletedAt", void 0);
__decorate([
    sequelize_typescript_1.BelongsTo(() => roleDetail_model_1.RoleDetail),
    __metadata("design:type", roleDetail_model_1.RoleDetail)
], ModuleList.prototype, "roleDetail", void 0);
ModuleList = __decorate([
    sequelize_typescript_1.Table({ tableName: 'modulelist' })
], ModuleList);
exports.ModuleList = ModuleList;
//# sourceMappingURL=modulelist.model.js.map