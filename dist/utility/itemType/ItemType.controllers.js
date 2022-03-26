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
exports.ItemTypeController = void 0;
const create_ItemType_dto_1 = require("./dto/create-ItemType.dto");
const ItemType_service_1 = require("./ItemType.service");
const common_1 = require("@nestjs/common");
let ItemTypeController = class ItemTypeController {
    constructor(ItemTypesService) {
        this.ItemTypesService = ItemTypesService;
    }
    create(createItemTypeDto, res) {
        return this.ItemTypesService.create(createItemTypeDto)
            .then(rec => {
            res.status(common_1.HttpStatus.CREATED).send(rec);
        })
            .catch(err => {
            res.status(common_1.HttpStatus.BAD_REQUEST).send(err.parent);
        });
    }
    update(code, updateItemTypeDto, res) {
        this.ItemTypesService.update(code, updateItemTypeDto)
            .then(rec => {
            this.ItemTypesService.findOne(code).then(r => {
                res.status(common_1.HttpStatus.OK).send({ message: "Record Updated", data: r });
            }).catch(err => {
                res.status(common_1.HttpStatus.NO_CONTENT).send(err.parent);
            });
        })
            .catch(err => {
            res.status(common_1.HttpStatus.BAD_REQUEST).send(err.parent);
        });
    }
    findAll() {
        console.log("check rec");
        return this.ItemTypesService.findAll();
    }
    findOne(code) {
        return this.ItemTypesService.findOne(code);
    }
    remove(code, res) {
        return this.ItemTypesService.remove(code).then(r => {
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
    __metadata("design:paramtypes", [create_ItemType_dto_1.CreateItemTypeDto, Object]),
    __metadata("design:returntype", Promise)
], ItemTypeController.prototype, "create", null);
__decorate([
    common_1.Put(':code'),
    __param(0, common_1.Param('code')),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_ItemType_dto_1.CreateItemTypeDto, Object]),
    __metadata("design:returntype", void 0)
], ItemTypeController.prototype, "update", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ItemTypeController.prototype, "findAll", null);
__decorate([
    common_1.Get(':code'),
    __param(0, common_1.Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ItemTypeController.prototype, "findOne", null);
__decorate([
    common_1.Delete(':code'),
    __param(0, common_1.Param('code')),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ItemTypeController.prototype, "remove", null);
ItemTypeController = __decorate([
    common_1.Controller('item-type'),
    __metadata("design:paramtypes", [ItemType_service_1.ItemTypeService])
], ItemTypeController);
exports.ItemTypeController = ItemTypeController;
//# sourceMappingURL=ItemType.controllers.js.map