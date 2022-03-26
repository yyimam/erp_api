"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseListModule = void 0;
const warehouseList_model_1 = require("./models/warehouseList.model");
const warehouseList_controllers_1 = require("./warehouseList.controllers");
const warehouseList_service_1 = require("./warehouseList.service");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
let WarehouseListModule = class WarehouseListModule {
};
WarehouseListModule = __decorate([
    common_1.Module({
        imports: [sequelize_1.SequelizeModule.forFeature([warehouseList_model_1.WarehouseList])],
        controllers: [warehouseList_controllers_1.WarehouseListController],
        providers: [warehouseList_service_1.WarehouseListService],
    })
], WarehouseListModule);
exports.WarehouseListModule = WarehouseListModule;
//# sourceMappingURL=warehouseList.module.js.map