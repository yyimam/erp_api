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
exports.ProductsController = void 0;
const create_product_dto_1 = require("./dto/create-product.dto");
const products_service_1 = require("./products.service");
const common_1 = require("@nestjs/common");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    async create(createProductDto, res) {
        this.productsService.create(createProductDto)
            .then(rec => {
            this.productsService.findById(rec.id).then(r => {
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
    async update(code, updateProductDto, res) {
        await this.productsService.update(code, updateProductDto)
            .then(rec => {
            this.productsService.findOne(code).then(r => {
                res.status(common_1.HttpStatus.OK).send({ message: "Record Updated", data: r });
            });
        })
            .catch(err => {
            res.status(common_1.HttpStatus.BAD_REQUEST).send(err.parent);
        });
    }
    async findAll() {
        return await this.productsService.findAll();
    }
    async findOne(id) {
        return await this.productsService.findById(id);
    }
    async SearchProduct(string, res) {
        this.productsService.search(string).then(r => {
            res.status(common_1.HttpStatus.ACCEPTED).send({ message: "success", data: r });
        }).catch(err => {
            res.status(common_1.HttpStatus.NO_CONTENT).send(err.parent);
        });
    }
    async findByString(ref, para) {
        return await this.productsService.findByItemType(para);
    }
    async remove(id, res) {
        await this.productsService.remove(id).then(r => {
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
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "create", null);
__decorate([
    common_1.Put(':code'),
    __param(0, common_1.Param('code')),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_product_dto_1.CreateProductDto, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "update", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findOne", null);
__decorate([
    common_1.Get('/search/:string'),
    __param(0, common_1.Param('string')),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "SearchProduct", null);
__decorate([
    common_1.Get('/:ref/:para'),
    __param(0, common_1.Param('ref')),
    __param(1, common_1.Param('para')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findByString", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "remove", null);
ProductsController = __decorate([
    common_1.Controller('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
exports.ProductsController = ProductsController;
//# sourceMappingURL=products.controllers.js.map