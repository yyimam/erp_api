"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandListModule = void 0;
const brandList_model_1 = require("./models/brandList.model");
const brandListcontrollers_1 = require("./brandListcontrollers");
const BrandList_service_1 = require("./BrandList.service");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
let BrandListModule = class BrandListModule {
};
BrandListModule = __decorate([
    common_1.Module({
        imports: [sequelize_1.SequelizeModule.forFeature([brandList_model_1.BrandList])],
        controllers: [brandListcontrollers_1.BrandListController],
        providers: [BrandList_service_1.BrandListService],
    })
], BrandListModule);
exports.BrandListModule = BrandListModule;
//# sourceMappingURL=brandList.module.js.map