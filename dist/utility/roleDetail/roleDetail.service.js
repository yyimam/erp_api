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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleDetailService = void 0;
const roleDetail_model_1 = require("./models/roleDetail.model");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
let RoleDetailService = class RoleDetailService {
    constructor(RoleDetailModel) {
        this.RoleDetailModel = RoleDetailModel;
    }
    async create(CreateRoleDetailDto) {
        let t = CreateRoleDetailDto;
        return await this.RoleDetailModel.create(t);
    }
    async update(code, UpdateRoleDetailDto) {
        let t = UpdateRoleDetailDto;
        return await this.RoleDetailModel.update(t, { where: { code: code } });
    }
    async findAll() {
        return await this.RoleDetailModel.findAll();
    }
    async findOne(code) {
        return await this.RoleDetailModel.findOne({
            where: {
                code,
            },
        });
    }
    async remove(id) {
        const user = await this.findOne(id);
        await user.destroy();
    }
};
RoleDetailService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(roleDetail_model_1.RoleDetail)),
    __metadata("design:paramtypes", [Object])
], RoleDetailService);
exports.RoleDetailService = RoleDetailService;
//# sourceMappingURL=roleDetail.service.js.map