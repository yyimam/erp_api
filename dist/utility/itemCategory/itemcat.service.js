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
exports.ItemCatService = void 0;
const itemcat_model_1 = require("./models/itemcat.model");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
let ItemCatService = class ItemCatService {
    constructor(ItemCatModel) {
        this.ItemCatModel = ItemCatModel;
    }
    async create(CreateItemCatDto) {
        let t = CreateItemCatDto;
        return await this.ItemCatModel.create(t);
    }
    async update(code, UpdateItemCatDto) {
        let t = UpdateItemCatDto;
        return await this.ItemCatModel.update(t, { where: { code: code } });
    }
    async findAll() {
        return await this.ItemCatModel.findAll();
    }
    async findOne(code) {
        return await this.ItemCatModel.findOne({
            where: {
                code,
            },
        });
    }
    async findById(id) {
        return await this.ItemCatModel.findOne({
            where: {
                id,
            },
        });
    }
    async remove(code) {
        const rec = await this.findOne(code);
        await rec.destroy().then(t => t);
        return rec;
    }
};
ItemCatService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(itemcat_model_1.ItemCat)),
    __metadata("design:paramtypes", [Object])
], ItemCatService);
exports.ItemCatService = ItemCatService;
//# sourceMappingURL=itemcat.service.js.map