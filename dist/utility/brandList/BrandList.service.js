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
exports.BrandListService = void 0;
const brandList_model_1 = require("./models/brandList.model");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
let BrandListService = class BrandListService {
    constructor(BrandListModel) {
        this.BrandListModel = BrandListModel;
    }
    create(CreateBrandListDto) {
        let t = CreateBrandListDto;
        return this.BrandListModel.create(t);
    }
    async update(code, UpdateBrandListDto) {
        let t = UpdateBrandListDto;
        return await this.BrandListModel.update(t, { where: { code: code } });
    }
    async findAll() {
        return this.BrandListModel.findAll();
    }
    findOne(code) {
        return this.BrandListModel.findOne({
            where: {
                code,
            },
        });
    }
    findById(id) {
        return this.BrandListModel.findOne({
            where: {
                id,
            },
        });
    }
    async remove(id) {
        const user = await this.findOne(id);
        await user.destroy();
    }
};
BrandListService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(brandList_model_1.BrandList)),
    __metadata("design:paramtypes", [Object])
], BrandListService);
exports.BrandListService = BrandListService;
//# sourceMappingURL=BrandList.service.js.map