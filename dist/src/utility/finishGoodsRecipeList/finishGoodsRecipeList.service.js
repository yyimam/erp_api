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
exports.finishGoodsRecipeListService = void 0;
const product_model_1 = require("./../products/models/product.model");
const finishGoodsRecipeMaster_model_1 = require("./../../entities/finishGoodsRecipeMaster.model");
const finishGoodsRecipeList_model_1 = require("./models/finishGoodsRecipeList.model");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
let finishGoodsRecipeListService = class finishGoodsRecipeListService {
    constructor(FinishGoodsRecipeMasterModel, FinishGoodsRecipeListModel) {
        this.FinishGoodsRecipeMasterModel = FinishGoodsRecipeMasterModel;
        this.FinishGoodsRecipeListModel = FinishGoodsRecipeListModel;
    }
    create(CreatefinishGoodsRecipeListDto) {
        let t = CreatefinishGoodsRecipeListDto;
        return this.FinishGoodsRecipeMasterModel.create(t, {
            include: [product_model_1.Product, finishGoodsRecipeList_model_1.FinishGoodsRecipeList]
        })
            .then(t => t)
            .catch(err => err);
    }
    async update(code, UpdatefinishGoodsRecipeListDto) {
        let t = UpdatefinishGoodsRecipeListDto;
        return this.FinishGoodsRecipeListModel.bulkCreate(t.finishGoodsRecipeList, { individualHooks: true, updateOnDuplicate: ["description", "disabled", "entryno", "mainitemcode", "qty", "subitemcode"] })
            .then(t => t)
            .catch(err => err);
    }
    async findAll() {
        return this.FinishGoodsRecipeMasterModel.findAll({
            include: [product_model_1.Product, finishGoodsRecipeList_model_1.FinishGoodsRecipeList]
        });
    }
    async findOne(code) {
        return this.FinishGoodsRecipeMasterModel.findOne({
            include: [finishGoodsRecipeList_model_1.FinishGoodsRecipeList, product_model_1.Product],
            where: { mainitemcode: code }
        });
    }
    async remove(code) {
        const rec = await this.findOne(code);
        let u = await rec.destroy().then(t => t);
        return rec;
    }
};
finishGoodsRecipeListService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(finishGoodsRecipeMaster_model_1.FinishGoodsRecipeMaster)),
    __param(1, sequelize_1.InjectModel(finishGoodsRecipeList_model_1.FinishGoodsRecipeList)),
    __metadata("design:paramtypes", [Object, Object])
], finishGoodsRecipeListService);
exports.finishGoodsRecipeListService = finishGoodsRecipeListService;
//# sourceMappingURL=finishGoodsRecipeList.service.js.map