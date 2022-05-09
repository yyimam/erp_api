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
exports.ItemUnitService = void 0;
const itemUnit_model_1 = require("./models/itemUnit.model");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
let ItemUnitService = class ItemUnitService {
    constructor(ItemUnitModel) {
        this.ItemUnitModel = ItemUnitModel;
    }
    async create(CreateItemUnitDto) {
        let t = CreateItemUnitDto;
        return await this.ItemUnitModel.create(t);
    }
    async update(code, UpdateItemUnitDto) {
        let t = UpdateItemUnitDto;
        return await this.ItemUnitModel.update(t, { where: { code: code } });
    }
    async findAll() {
        return await this.ItemUnitModel.findAll();
    }
    async findOne(code) {
        return await this.ItemUnitModel.findOne({
            where: {
                code,
            },
        });
    }
    async findById(id) {
        return await this.ItemUnitModel.findOne({
            where: {
                id,
            },
        });
    }
    async remove(code) {
        const res = await this.findOne(code);
        let u = await res.destroy().then(t => t);
        return res;
    }
};
ItemUnitService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(itemUnit_model_1.ItemUnit)),
    __metadata("design:paramtypes", [Object])
], ItemUnitService);
exports.ItemUnitService = ItemUnitService;
//# sourceMappingURL=itemUnit.service.js.map