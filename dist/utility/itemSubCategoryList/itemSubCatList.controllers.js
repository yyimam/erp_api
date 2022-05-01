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
exports.ItemSubCatListController = void 0;
const create_itemSubCatList_dto_1 = require("./dto/create-itemSubCatList.dto");
const itemSubCatList_service_1 = require("./itemSubCatList.service");
const common_1 = require("@nestjs/common");
let ItemSubCatListController = class ItemSubCatListController {
    constructor(ItemSubCatListsService) {
        this.ItemSubCatListsService = ItemSubCatListsService;
    }
    async create(createItemSubCatListDto, res) {
        return this.ItemSubCatListsService.create(createItemSubCatListDto)
            .then(rec => {
            this.ItemSubCatListsService.findById(rec.id).then(r => {
                res.status(common_1.HttpStatus.CREATED).send(r);
            }).catch(err => {
                res.status(common_1.HttpStatus.NO_CONTENT).send(err.parent);
            });
        })
            .catch(err => {
            res.status(common_1.HttpStatus.BAD_REQUEST).send(err.parent);
        });
    }
    async update(code, updateItemSubCatListDto, res) {
        this.ItemSubCatListsService.update(code, updateItemSubCatListDto)
            .then(rec => {
            this.ItemSubCatListsService.findOne(code).then(r => {
                res.status(common_1.HttpStatus.OK).send({ message: "Record Updated", data: r });
            }).catch(err => {
                res.status(common_1.HttpStatus.NO_CONTENT).send(err.parent);
            });
        })
            .catch(err => {
            res.status(common_1.HttpStatus.BAD_REQUEST).send(err.parent);
        });
    }
    async findAll() {
        return this.ItemSubCatListsService.findAll();
    }
    async findOne(code) {
        return this.ItemSubCatListsService.findOne(code);
    }
    async remove(code, res) {
        return this.ItemSubCatListsService.remove(code).then(r => {
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
    __metadata("design:paramtypes", [create_itemSubCatList_dto_1.CreateItemSubCatListDto, Object]),
    __metadata("design:returntype", Promise)
], ItemSubCatListController.prototype, "create", null);
__decorate([
    common_1.Put(':code'),
    __param(0, common_1.Param('code')),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_itemSubCatList_dto_1.CreateItemSubCatListDto, Object]),
    __metadata("design:returntype", Promise)
], ItemSubCatListController.prototype, "update", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ItemSubCatListController.prototype, "findAll", null);
__decorate([
    common_1.Get(':code'),
    __param(0, common_1.Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ItemSubCatListController.prototype, "findOne", null);
__decorate([
    common_1.Delete(':code'),
    __param(0, common_1.Param('code')),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ItemSubCatListController.prototype, "remove", null);
ItemSubCatListController = __decorate([
    common_1.Controller('itemSubCatList'),
    __metadata("design:paramtypes", [itemSubCatList_service_1.ItemSubCatListService])
], ItemSubCatListController);
exports.ItemSubCatListController = ItemSubCatListController;
//# sourceMappingURL=itemSubCatList.controllers.js.map