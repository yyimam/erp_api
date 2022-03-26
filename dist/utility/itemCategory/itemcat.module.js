"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemCatModule = void 0;
const itemcat_model_1 = require("./models/itemcat.model");
const itemcat_controllers_1 = require("./itemcat.controllers");
const itemcat_service_1 = require("./itemcat.service");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
let ItemCatModule = class ItemCatModule {
};
ItemCatModule = __decorate([
    common_1.Module({
        imports: [sequelize_1.SequelizeModule.forFeature([itemcat_model_1.ItemCat])],
        controllers: [itemcat_controllers_1.ItemCatController],
        providers: [itemcat_service_1.ItemCatService],
    })
], ItemCatModule);
exports.ItemCatModule = ItemCatModule;
//# sourceMappingURL=itemcat.module.js.map