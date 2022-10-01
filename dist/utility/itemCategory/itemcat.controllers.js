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
exports.ItemCatController = void 0;
const create_itemcat_dto_1 = require("./dto/create-itemcat.dto");
const itemcat_service_1 = require("./itemcat.service");
const common_1 = require("@nestjs/common");
let ItemCatController = class ItemCatController {
    constructor(ItemCatsService) {
        this.ItemCatsService = ItemCatsService;
    }
    async create(createItemCatDto, res) {
        await this.ItemCatsService.create(createItemCatDto)
            .then(rec => {
            this.ItemCatsService.findById(rec.id).then(t => {
                res.status(common_1.HttpStatus.CREATED).send(t);
            }).catch(err => {
                res.status(common_1.HttpStatus.NO_CONTENT).send(err.parent);
            });
        })
            .catch(err => {
            res.status(common_1.HttpStatus.BAD_REQUEST).send(err.parent);
        });
    }
    async update(code, updateItemCatDto, res) {
        await this.ItemCatsService.update(code, updateItemCatDto)
            .then(rec => {
            this.ItemCatsService.findOne(code).then(r => {
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
        try {
            return await this.ItemCatsService.findAll();
        }
        catch (error) {
            return error;
        }
    }
    async findOne(code) {
        return await this.ItemCatsService.findOne(code);
    }
    async remove(code, res) {
        return await this.ItemCatsService.remove(code).then(r => {
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
    __metadata("design:paramtypes", [create_itemcat_dto_1.CreateItemCatDto, Object]),
    __metadata("design:returntype", Promise)
], ItemCatController.prototype, "create", null);
__decorate([
    common_1.Put(':code'),
    __param(0, common_1.Param('code')),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_itemcat_dto_1.CreateItemCatDto, Object]),
    __metadata("design:returntype", Promise)
], ItemCatController.prototype, "update", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ItemCatController.prototype, "findAll", null);
__decorate([
    common_1.Get(':code'),
    __param(0, common_1.Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ItemCatController.prototype, "findOne", null);
__decorate([
    common_1.Delete(':code'),
    __param(0, common_1.Param('code')),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ItemCatController.prototype, "remove", null);
ItemCatController = __decorate([
    common_1.Controller('itemcat'),
    __metadata("design:paramtypes", [itemcat_service_1.ItemCatService])
], ItemCatController);
exports.ItemCatController = ItemCatController;
//# sourceMappingURL=itemcat.controllers.js.map