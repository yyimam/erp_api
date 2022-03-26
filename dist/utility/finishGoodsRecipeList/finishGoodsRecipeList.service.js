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
const finishGoodsRecipeList_model_1 = require("./models/finishGoodsRecipeList.model");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
let finishGoodsRecipeListService = class finishGoodsRecipeListService {
    constructor(finishGoodsRecipeListModel) {
        this.finishGoodsRecipeListModel = finishGoodsRecipeListModel;
    }
    create(CreatefinishGoodsRecipeListDto) {
        let t = CreatefinishGoodsRecipeListDto;
        return this.finishGoodsRecipeListModel.bulkCreate(t);
    }
    async update(code, UpdatefinishGoodsRecipeListDto) {
        let t = UpdatefinishGoodsRecipeListDto;
        return this.finishGoodsRecipeListModel.bulkCreate(t, { updateOnDuplicate: ["mainitemcode", "subitemcode", "qty", "wastage_qty"] });
    }
    async findAll(idno) {
        return this.finishGoodsRecipeListModel.findAll({
            where: {
                mainitemcode: idno,
            },
        });
    }
    findOne(code) {
        return this.finishGoodsRecipeListModel.findOne({
            where: {
                code,
            },
        });
    }
    async remove(id) {
        await this.finishGoodsRecipeListModel.destroy({
            where: {
                mainitemcode: id,
            },
        });
    }
};
finishGoodsRecipeListService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(finishGoodsRecipeList_model_1.finishGoodsRecipeList)),
    __metadata("design:paramtypes", [Object])
], finishGoodsRecipeListService);
exports.finishGoodsRecipeListService = finishGoodsRecipeListService;
//# sourceMappingURL=finishGoodsRecipeList.service.js.map