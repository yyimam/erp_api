"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleDetailModule = void 0;
const roleDetail_model_1 = require("./models/roleDetail.model");
const roleDetail_controllers_1 = require("./roleDetail.controllers");
const roleDetail_service_1 = require("./roleDetail.service");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
let RoleDetailModule = class RoleDetailModule {
};
RoleDetailModule = __decorate([
    common_1.Module({
        imports: [sequelize_1.SequelizeModule.forFeature([roleDetail_model_1.RoleDetail])],
        controllers: [roleDetail_controllers_1.RoleDetailController],
        providers: [roleDetail_service_1.RoleDetailService],
    })
], RoleDetailModule);
exports.RoleDetailModule = RoleDetailModule;
//# sourceMappingURL=roleDetail.module.js.map