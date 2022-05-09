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
exports.ItemTypeService = void 0;
const ItemType_model_1 = require("./models/ItemType.model");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
let ItemTypeService = class ItemTypeService {
    constructor(ItemTypeModel) {
        this.ItemTypeModel = ItemTypeModel;
    }
    async create(CreateItemTypeDto) {
        let t = CreateItemTypeDto;
        return await this.ItemTypeModel.create(t);
    }
    async update(code, UpdateItemTypeDto) {
        let t = UpdateItemTypeDto;
        return await this.ItemTypeModel.update(t, { where: { code: code } });
    }
    async findAll() {
        return await this.ItemTypeModel.findAll();
    }
    async findOne(code) {
        return await this.ItemTypeModel.findOne({
            where: {
                code,
            },
        });
    }
    async remove(id) {
        const type = await this.findOne(id);
        let u = await type.destroy().then(t => t);
        return type;
    }
};
ItemTypeService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(ItemType_model_1.ItemType)),
    __metadata("design:paramtypes", [Object])
], ItemTypeService);
exports.ItemTypeService = ItemTypeService;
//# sourceMappingURL=ItemType.service.js.map