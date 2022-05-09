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
exports.AcController = void 0;
const ac_dto_1 = require("./dto/ac.dto");
const ac_service_1 = require("./ac.service");
const common_1 = require("@nestjs/common");
let AcController = class AcController {
    constructor(AcService) {
        this.AcService = AcService;
    }
    async create(acDto, res) {
        return this.AcService.create(acDto)
            .then(rec => {
            res.status(common_1.HttpStatus.CREATED).send(rec);
        })
            .catch(err => {
            res.status(common_1.HttpStatus.BAD_REQUEST).send(err);
        });
    }
    async update(code, acDto, res) {
        this.AcService.update(code, acDto)
            .then(rec => {
            this.AcService.findOne(code).then(r => {
                res.status(common_1.HttpStatus.OK).send({ message: "Record Updated", data: r });
            }).catch(err => {
                res.status(common_1.HttpStatus.NO_CONTENT).send({ message: "Conent Not Found", data: err.parent });
            });
        })
            .catch(err => {
            res.status(common_1.HttpStatus.BAD_REQUEST).send(err.parent);
        });
    }
    async findAll() {
        return this.AcService.findAll();
    }
    async findOne(code) {
        return this.AcService.findOne(code);
    }
    async remove(id, res) {
        return this.AcService.remove(id).then(r => {
            if (r) {
                res.status(common_1.HttpStatus.ACCEPTED).send({ message: "Deleted", data: r });
            }
            else {
                res.status(common_1.HttpStatus.NO_CONTENT).send({ message: "Error", data: "No Record found" });
            }
        }).catch(err => {
            res.status(common_1.HttpStatus.NO_CONTENT).send({ message: "Error", data: err });
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ac_dto_1.AcDto, Object]),
    __metadata("design:returntype", Promise)
], AcController.prototype, "create", null);
__decorate([
    common_1.Put(':code'),
    __param(0, common_1.Param('code')),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ac_dto_1.AcDto, Object]),
    __metadata("design:returntype", Promise)
], AcController.prototype, "update", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AcController.prototype, "findAll", null);
__decorate([
    common_1.Get(':code'),
    __param(0, common_1.Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AcController.prototype, "findOne", null);
__decorate([
    common_1.Delete(':code'),
    __param(0, common_1.Param('code')),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AcController.prototype, "remove", null);
AcController = __decorate([
    common_1.Controller('ac'),
    __metadata("design:paramtypes", [ac_service_1.AcService])
], AcController);
exports.AcController = AcController;
//# sourceMappingURL=ac.controllers.js.map