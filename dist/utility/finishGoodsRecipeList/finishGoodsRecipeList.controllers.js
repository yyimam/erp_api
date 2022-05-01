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
exports.finishGoodsRecipeListController = void 0;
const create_finishGoodsRecipeList_dto_1 = require("./dto/create-finishGoodsRecipeList.dto");
const finishGoodsRecipeList_service_1 = require("./finishGoodsRecipeList.service");
const common_1 = require("@nestjs/common");
let finishGoodsRecipeListController = class finishGoodsRecipeListController {
    constructor(finishGoodsRecipeListsService) {
        this.finishGoodsRecipeListsService = finishGoodsRecipeListsService;
    }
    async create(createfinishGoodsRecipeListDto, res) {
        return this.finishGoodsRecipeListsService.create(createfinishGoodsRecipeListDto)
            .then(rec => {
            res.status(common_1.HttpStatus.CREATED).send(rec);
        })
            .catch(err => {
            res.status(common_1.HttpStatus.BAD_REQUEST).send(err.parent);
        });
    }
    async update(code, updatefinishGoodsRecipeListDto, res) {
        this.finishGoodsRecipeListsService.update(code, updatefinishGoodsRecipeListDto)
            .then(rec => {
            res.status(common_1.HttpStatus.OK).send({ message: "record updated", data: rec });
        })
            .catch(err => {
            res.status(common_1.HttpStatus.BAD_REQUEST).send({ message: "Error", data: err.parent });
        });
    }
    async findAll() {
        return this.finishGoodsRecipeListsService.findAll();
    }
    async findOne(code) {
        return this.finishGoodsRecipeListsService.findOne(code);
    }
    async remove(code, res) {
        return this.finishGoodsRecipeListsService.remove(code).then(r => {
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
    __metadata("design:paramtypes", [create_finishGoodsRecipeList_dto_1.CreatefinishGoodsRecipeListDto, Object]),
    __metadata("design:returntype", Promise)
], finishGoodsRecipeListController.prototype, "create", null);
__decorate([
    common_1.Put(':code'),
    __param(0, common_1.Param('code')),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_finishGoodsRecipeList_dto_1.CreatefinishGoodsRecipeListDto, Object]),
    __metadata("design:returntype", Promise)
], finishGoodsRecipeListController.prototype, "update", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], finishGoodsRecipeListController.prototype, "findAll", null);
__decorate([
    common_1.Get(':code'),
    __param(0, common_1.Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], finishGoodsRecipeListController.prototype, "findOne", null);
__decorate([
    common_1.Delete(':code'),
    __param(0, common_1.Param('code')),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], finishGoodsRecipeListController.prototype, "remove", null);
finishGoodsRecipeListController = __decorate([
    common_1.Controller('finish-goods-recipe-list'),
    __metadata("design:paramtypes", [finishGoodsRecipeList_service_1.finishGoodsRecipeListService])
], finishGoodsRecipeListController);
exports.finishGoodsRecipeListController = finishGoodsRecipeListController;
//# sourceMappingURL=finishGoodsRecipeList.controllers.js.map