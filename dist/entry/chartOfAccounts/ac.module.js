"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcModule = void 0;
const ac_model_1 = require("./models/ac.model");
const ac_controllers_1 = require("./ac.controllers");
const ac_service_1 = require("./ac.service");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
let AcModule = class AcModule {
};
AcModule = __decorate([
    common_1.Module({
        imports: [sequelize_1.SequelizeModule.forFeature([ac_model_1.AC])],
        controllers: [ac_controllers_1.AcController],
        providers: [ac_service_1.AcService],
    })
], AcModule);
exports.AcModule = AcModule;
//# sourceMappingURL=ac.module.js.map