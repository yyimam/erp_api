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
exports.BrandListController = void 0;
const create_brandList_dto_1 = require("./dto/create-brandList.dto");
const BrandList_service_1 = require("./BrandList.service");
const common_1 = require("@nestjs/common");
let BrandListController = class BrandListController {
    constructor(BrandListsService) {
        this.BrandListsService = BrandListsService;
    }
    async create(createBrandListDto, res) {
        return this.BrandListsService.create(createBrandListDto)
            .then(rec => {
            this.BrandListsService.findById(rec.id).then(t => {
                res.status(common_1.HttpStatus.CREATED).send(t);
            }).catch(err => {
                res.status(common_1.HttpStatus.NO_CONTENT).send(err.parent);
            });
        })
            .catch(err => {
            res.status(common_1.HttpStatus.BAD_REQUEST).send(err.parent);
        });
    }
    async update(code, updateBrandListDto, res) {
        this.BrandListsService.update(code, updateBrandListDto)
            .then(rec => {
            this.BrandListsService.findOne(code).then(r => {
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
        return await this.BrandListsService.findAll();
    }
    async findOne(code) {
        return await this.BrandListsService.findOne(code);
    }
    async remove(code, res) {
        return await this.BrandListsService.remove(code).then(r => {
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
    __metadata("design:paramtypes", [create_brandList_dto_1.CreateBrandListDto, Object]),
    __metadata("design:returntype", Promise)
], BrandListController.prototype, "create", null);
__decorate([
    common_1.Put(':code'),
    __param(0, common_1.Param('code')),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_brandList_dto_1.CreateBrandListDto, Object]),
    __metadata("design:returntype", Promise)
], BrandListController.prototype, "update", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BrandListController.prototype, "findAll", null);
__decorate([
    common_1.Get(':code'),
    __param(0, common_1.Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BrandListController.prototype, "findOne", null);
__decorate([
    common_1.Delete(':code'),
    __param(0, common_1.Param('code')),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BrandListController.prototype, "remove", null);
BrandListController = __decorate([
    common_1.Controller('brand-list'),
    __metadata("design:paramtypes", [BrandList_service_1.BrandListService])
], BrandListController);
exports.BrandListController = BrandListController;
//# sourceMappingURL=brandListcontrollers.js.map