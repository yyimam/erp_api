"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.finishGoodsRecipeListModule = void 0;
const product_model_1 = require("./../products/models/product.model");
const finishGoodsRecipeMaster_model_1 = require("./../../entities/finishGoodsRecipeMaster.model");
const finishGoodsRecipeList_model_1 = require("./models/finishGoodsRecipeList.model");
const finishGoodsRecipeList_controllers_1 = require("./finishGoodsRecipeList.controllers");
const finishGoodsRecipeList_service_1 = require("./finishGoodsRecipeList.service");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
let finishGoodsRecipeListModule = class finishGoodsRecipeListModule {
};
finishGoodsRecipeListModule = __decorate([
    common_1.Module({
        imports: [sequelize_1.SequelizeModule.forFeature([finishGoodsRecipeMaster_model_1.FinishGoodsRecipeMaster]), sequelize_1.SequelizeModule.forFeature([finishGoodsRecipeList_model_1.FinishGoodsRecipeList]), sequelize_1.SequelizeModule.forFeature([product_model_1.Product])],
        controllers: [finishGoodsRecipeList_controllers_1.finishGoodsRecipeListController],
        providers: [finishGoodsRecipeList_service_1.finishGoodsRecipeListService],
    })
], finishGoodsRecipeListModule);
exports.finishGoodsRecipeListModule = finishGoodsRecipeListModule;
//# sourceMappingURL=finishGoodsRecipeList.module.js.map