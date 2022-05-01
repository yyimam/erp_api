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
exports.AC = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let AC = class AC extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column({
        autoIncrement: true,
        field: "id"
    }),
    __metadata("design:type", Number)
], AC.prototype, "idno", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AC.prototype, "acode", void 0);
__decorate([
    sequelize_typescript_1.Column({
        field: "acode"
    }),
    __metadata("design:type", String)
], AC.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AC.prototype, "title", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AC.prototype, "address", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AC.prototype, "type", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AC.prototype, "clevel", void 0);
__decorate([
    sequelize_typescript_1.Column({
        field: 'parent'
    }),
    __metadata("design:type", String)
], AC.prototype, "parentId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AC.prototype, "stregno", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AC.prototype, "ntnno", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], AC.prototype, "lastbal", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AC.prototype, "cash_bank", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AC.prototype, "aging", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AC.prototype, "old_acode", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AC.prototype, "parentsname", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], AC.prototype, "Credit_Days", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AC.prototype, "vehicleno", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AC.prototype, "emboss_line", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AC.prototype, "transporter", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], AC.prototype, "sol_com", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], AC.prototype, "osb_com", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], AC.prototype, "discount", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], AC.prototype, "cr_limit", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AC.prototype, "contactperson", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AC.prototype, "telno", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AC.prototype, "Show_in_Aging", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AC.prototype, "depart1", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AC.prototype, "contact_person1", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AC.prototype, "contact_mobile1", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AC.prototype, "email1", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AC.prototype, "depart2", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AC.prototype, "contact_person2", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AC.prototype, "contact_mobile2", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AC.prototype, "email2", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AC.prototype, "depart3", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AC.prototype, "contact_person3", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AC.prototype, "contact_mobile3", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AC.prototype, "email3", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AC.prototype, "lockuser", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AC.prototype, "citycode", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], AC.prototype, "groupcode", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    sequelize_typescript_1.Column({ field: 'created_at' }),
    __metadata("design:type", Date)
], AC.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    sequelize_typescript_1.Column({ field: 'updated_at' }),
    __metadata("design:type", Date)
], AC.prototype, "updatedAt", void 0);
__decorate([
    sequelize_typescript_1.DeletedAt,
    sequelize_typescript_1.Column({ field: 'deleted_at' }),
    __metadata("design:type", Date)
], AC.prototype, "deletedAt", void 0);
AC = __decorate([
    sequelize_typescript_1.Table({
        tableName: 'ac',
        timestamps: true
    })
], AC);
exports.AC = AC;
//# sourceMappingURL=ac.model.js.map