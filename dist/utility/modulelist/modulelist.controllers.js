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
exports.ModuleListController = void 0;
const create_modulelist_dto_1 = require("./dto/create-modulelist.dto");
const modulelist_service_1 = require("./modulelist.service");
const common_1 = require("@nestjs/common");
let ModuleListController = class ModuleListController {
    constructor(ModuleListsService) {
        this.ModuleListsService = ModuleListsService;
    }
    async create(createModuleListDto, res) {
        return this.ModuleListsService.create(createModuleListDto)
            .then(rec => {
            res.status(common_1.HttpStatus.CREATED).send(rec);
        })
            .catch(err => {
            res.status(common_1.HttpStatus.BAD_REQUEST).send(err.parent);
        });
    }
    async update(code, updateModuleListDto, res) {
        this.ModuleListsService.update(code, updateModuleListDto)
            .then(rec => {
            res.status(common_1.HttpStatus.OK).send({ message: "record updated" });
        })
            .catch(err => {
            res.status(common_1.HttpStatus.BAD_REQUEST).send(err.parent);
        });
    }
    async findAll(id) {
        return this.ModuleListsService.findAll(id);
    }
    async remove(id) {
        return this.ModuleListsService.remove(id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_modulelist_dto_1.CreateModuleListDto, Object]),
    __metadata("design:returntype", Promise)
], ModuleListController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_modulelist_dto_1.CreateModuleListDto, Object]),
    __metadata("design:returntype", Promise)
], ModuleListController.prototype, "update", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ModuleListController.prototype, "findAll", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ModuleListController.prototype, "remove", null);
ModuleListController = __decorate([
    common_1.Controller('Navigation'),
    __metadata("design:paramtypes", [modulelist_service_1.ModuleListService])
], ModuleListController);
exports.ModuleListController = ModuleListController;
//# sourceMappingURL=modulelist.controllers.js.map