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
exports.ProductsService = void 0;
const product_model_1 = require("./models/product.model");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
let ProductsService = class ProductsService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async create(CreateProductDto) {
        let t = CreateProductDto;
        return await this.productModel.create(t)
            .then(rec => { console.log("reco", rec); return rec; })
            .catch(err => { console.log("records", err); return err; });
    }
    async update(code, UpdateProductDto) {
        let t = UpdateProductDto;
        return await this.productModel.update(t, { where: { code: code } });
    }
    async findAll() {
        return await this.productModel.findAll();
    }
    async findOne(code) {
        return await this.productModel.findOne({
            where: {
                code,
            },
        });
    }
    async findById(id) {
        return this.productModel.findOne({
            where: {
                id,
            },
        });
    }
    async findByItemType(itemtype) {
        return await this.productModel.findAll({
            where: {
                itemtype
            }
        });
    }
    async remove(id) {
        const product = await this.findById(id);
        let u = await product.destroy().then(t => t);
        return product;
    }
};
ProductsService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(product_model_1.Product)),
    __metadata("design:paramtypes", [Object])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map