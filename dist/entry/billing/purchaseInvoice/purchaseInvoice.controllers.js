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
exports.PurchaseInvoiceController = void 0;
const create_purchaseInvoice_dto_1 = require("./dto/create-purchaseInvoice.dto");
const purchaseInvoice_service_1 = require("./purchaseInvoice.service");
const common_1 = require("@nestjs/common");
let PurchaseInvoiceController = class PurchaseInvoiceController {
    constructor(PurchaseInvoicesService) {
        this.PurchaseInvoicesService = PurchaseInvoicesService;
    }
    create(createPurchaseInvoiceDto, res) {
        return this.PurchaseInvoicesService.create(createPurchaseInvoiceDto)
            .then(rec => {
            res.status(common_1.HttpStatus.CREATED).send(rec);
        })
            .catch(err => {
            res.status(common_1.HttpStatus.BAD_REQUEST).send(err.parent);
        });
    }
    update(code, updatePurchaseInvoiceDto, res) {
        this.PurchaseInvoicesService.update(code, updatePurchaseInvoiceDto)
            .then(rec => {
            res.status(common_1.HttpStatus.OK).send({ message: "record updated" });
        })
            .catch(err => {
            res.status(common_1.HttpStatus.BAD_REQUEST).send(err.parent);
        });
    }
    findAll() {
        console.log("details");
        return this.PurchaseInvoicesService.findAll();
    }
    findOne(code) {
        console.log("details", code);
        return this.PurchaseInvoicesService.findOne(code);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_purchaseInvoice_dto_1.CreatePurchaseInvoiceDto, Object]),
    __metadata("design:returntype", Promise)
], PurchaseInvoiceController.prototype, "create", null);
__decorate([
    common_1.Put(':code'),
    __param(0, common_1.Param('code')),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_purchaseInvoice_dto_1.CreatePurchaseInvoiceDto, Object]),
    __metadata("design:returntype", void 0)
], PurchaseInvoiceController.prototype, "update", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PurchaseInvoiceController.prototype, "findAll", null);
__decorate([
    common_1.Get(':code'),
    __param(0, common_1.Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PurchaseInvoiceController.prototype, "findOne", null);
PurchaseInvoiceController = __decorate([
    common_1.Controller('PU'),
    __metadata("design:paramtypes", [purchaseInvoice_service_1.PurchaseInvoiceService])
], PurchaseInvoiceController);
exports.PurchaseInvoiceController = PurchaseInvoiceController;
//# sourceMappingURL=purchaseInvoice.controllers.js.map