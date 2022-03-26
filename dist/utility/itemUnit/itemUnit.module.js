"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemUnitModule = void 0;
const itemUnit_model_1 = require("./models/itemUnit.model");
const itemUnit_controllers_1 = require("./itemUnit.controllers");
const itemUnit_service_1 = require("./itemUnit.service");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
let ItemUnitModule = class ItemUnitModule {
};
ItemUnitModule = __decorate([
    common_1.Module({
        imports: [sequelize_1.SequelizeModule.forFeature([itemUnit_model_1.ItemUnit])],
        controllers: [itemUnit_controllers_1.ItemUnitController],
        providers: [itemUnit_service_1.ItemUnitService],
    })
], ItemUnitModule);
exports.ItemUnitModule = ItemUnitModule;
//# sourceMappingURL=itemUnit.module.js.map