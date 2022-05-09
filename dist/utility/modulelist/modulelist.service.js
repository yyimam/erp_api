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
exports.ModuleListService = void 0;
const modulelist_model_1 = require("./models/modulelist.model");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const roleDetail_model_1 = require("../roleDetail/models/roleDetail.model");
const sequelize_2 = require("sequelize");
let ModuleListService = class ModuleListService {
    constructor(ModuleListModel) {
        this.ModuleListModel = ModuleListModel;
        this.inc = ["dependent", "serialNo", "menus", "modulename", "moduletype", [sequelize_2.literal('`roleDetail`.`can_access`'), 'canAccess'], [sequelize_2.literal('`roleDetail`.`can_add`'), "canAdd"], [sequelize_2.literal('`roleDetail`.`can_edit`'), "canEdit"], [sequelize_2.literal('`roleDetail`.`can_delete`'), "canDelete"], [sequelize_2.literal('`roleDetail`.`can_print`'), "canPrint"], [sequelize_2.literal('`roleDetail`.`can_docs`'), "canDocs"]];
    }
    async create(CreateModuleListDto) {
        let t = CreateModuleListDto;
        return await this.ModuleListModel.create(t);
    }
    async update(code, UpdateModuleListDto) {
        let t = UpdateModuleListDto;
        return await this.ModuleListModel.update(t, { where: { code: code } });
    }
    async findAll(id) {
        return await this.ModuleListModel.findAll({
            include: { model: roleDetail_model_1.RoleDetail },
            order: [['serialNo', 'ASC']],
            where: {
                [sequelize_2.Op.or]: [
                    { '$roleDetail.roleid$': id },
                    { '$moduleList.modulenature$': 'menu' }
                ]
            },
            attributes: { include: this.inc }
        });
    }
    async findOne(code) {
        return await this.ModuleListModel.findOne({
            where: {
                code,
            },
        });
    }
    async remove(id) {
        const user = await this.findOne(id);
        await user.destroy();
    }
};
ModuleListService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(modulelist_model_1.ModuleList)),
    __metadata("design:paramtypes", [Object])
], ModuleListService);
exports.ModuleListService = ModuleListService;
//# sourceMappingURL=modulelist.service.js.map