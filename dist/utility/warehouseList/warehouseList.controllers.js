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
exports.WarehouseListController = void 0;
const create_warehouseList_dto_1 = require("./dto/create-warehouseList.dto");
const warehouseList_service_1 = require("./warehouseList.service");
const common_1 = require("@nestjs/common");
let WarehouseListController = class WarehouseListController {
    constructor(WarehouseListsService) {
        this.WarehouseListsService = WarehouseListsService;
    }
    create(createWarehouseListDto, res) {
        return this.WarehouseListsService.create(createWarehouseListDto)
            .then(rec => {
            let t = this.WarehouseListsService.findById(rec.id).then(r => {
                res.status(common_1.HttpStatus.CREATED).send(r);
            })
                .catch(err => {
                res.status(common_1.HttpStatus.NO_CONTENT).send(err.parent);
            });
        })
            .catch(err => {
            res.status(common_1.HttpStatus.BAD_REQUEST).send(err.parent);
        });
    }
    update(code, updateWarehouseListDto, res) {
        this.WarehouseListsService.update(code, updateWarehouseListDto)
            .then(rec => {
            this.WarehouseListsService.findOne(code).then(r => {
                res.status(common_1.HttpStatus.OK).send({ message: "Record Updated", data: r });
            });
        })
            .catch(err => {
            res.status(common_1.HttpStatus.BAD_REQUEST).send(err.parent);
        });
    }
    findAll() {
        return this.WarehouseListsService.findAll();
    }
    findOne(code) {
        return this.WarehouseListsService.findOne(code);
    }
    remove(code, res) {
        return this.WarehouseListsService.remove(code).then(r => {
            res.status(common_1.HttpStatus.ACCEPTED).send({ message: "Deleted", data: r });
        }).catch(err => {
            res.status(common_1.HttpStatus.NO_CONTENT).send(err.parent);
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_warehouseList_dto_1.CreateWarehouseListDto, Object]),
    __metadata("design:returntype", Promise)
], WarehouseListController.prototype, "create", null);
__decorate([
    common_1.Put(':code'),
    __param(0, common_1.Param('code')),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_warehouseList_dto_1.CreateWarehouseListDto, Object]),
    __metadata("design:returntype", void 0)
], WarehouseListController.prototype, "update", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WarehouseListController.prototype, "findAll", null);
__decorate([
    common_1.Get(':code'),
    __param(0, common_1.Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WarehouseListController.prototype, "findOne", null);
__decorate([
    common_1.Delete(':code'),
    __param(0, common_1.Param('code')),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], WarehouseListController.prototype, "remove", null);
WarehouseListController = __decorate([
    common_1.Controller('warehouse-list'),
    __metadata("design:paramtypes", [warehouseList_service_1.WarehouseListService])
], WarehouseListController);
exports.WarehouseListController = WarehouseListController;
//# sourceMappingURL=warehouseList.controllers.js.map