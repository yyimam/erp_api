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
exports.WarehouseListService = void 0;
const warehouseList_model_1 = require("./models/warehouseList.model");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const helper_service_1 = require("../../helper/helper.service");
let WarehouseListService = class WarehouseListService {
    constructor(WarehouseListModel) {
        this.WarehouseListModel = WarehouseListModel;
    }
    create(CreateWarehouseListDto) {
        let t = CreateWarehouseListDto;
        return this.WarehouseListModel.create(t);
    }
    async update(code, UpdateWarehouseListDto) {
        let t = UpdateWarehouseListDto;
        return await this.WarehouseListModel.update(t, { where: { code: code } });
    }
    async findAll() {
        return this.WarehouseListModel.findAll();
    }
    findOne(code) {
        return this.WarehouseListModel.findOne({
            where: {
                code,
            },
        });
    }
    findById(id) {
        return this.WarehouseListModel.findOne({
            where: {
                id,
            },
        });
    }
    async remove(code) {
        const user = await this.findOne(code);
        let u = await user.destroy().then(t => t);
        return user;
    }
};
WarehouseListService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(warehouseList_model_1.WarehouseList)),
    __metadata("design:paramtypes", [Object])
], WarehouseListService);
exports.WarehouseListService = WarehouseListService;
//# sourceMappingURL=warehouseList.service.js.map