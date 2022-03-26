"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemTypeModule = void 0;
const ItemType_model_1 = require("./models/ItemType.model");
const ItemType_controllers_1 = require("./ItemType.controllers");
const ItemType_service_1 = require("./ItemType.service");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
let ItemTypeModule = class ItemTypeModule {
};
ItemTypeModule = __decorate([
    common_1.Module({
        imports: [sequelize_1.SequelizeModule.forFeature([ItemType_model_1.ItemType])],
        controllers: [ItemType_controllers_1.ItemTypeController],
        providers: [ItemType_service_1.ItemTypeService],
    })
], ItemTypeModule);
exports.ItemTypeModule = ItemTypeModule;
//# sourceMappingURL=itemType.module.js.map