"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuleListModule = void 0;
const modulelist_model_1 = require("./models/modulelist.model");
const modulelist_controllers_1 = require("./modulelist.controllers");
const modulelist_service_1 = require("./modulelist.service");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
let ModuleListModule = class ModuleListModule {
};
ModuleListModule = __decorate([
    common_1.Module({
        imports: [sequelize_1.SequelizeModule.forFeature([modulelist_model_1.ModuleList])],
        controllers: [modulelist_controllers_1.ModuleListController],
        providers: [modulelist_service_1.ModuleListService],
    })
], ModuleListModule);
exports.ModuleListModule = ModuleListModule;
//# sourceMappingURL=modulelist.module.js.map