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
exports.AcService = void 0;
const ac_model_1 = require("./models/ac.model");
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
let AcService = class AcService {
    constructor(AcModel) {
        this.AcModel = AcModel;
    }
    async create(acDto) {
        let t = acDto;
        return this.AcModel.create(t);
    }
    async update(acode, acDto) {
        let t = acDto;
        return await this.AcModel.update(t, { where: { acode: acode } });
    }
    async findAll() {
        return this.AcModel.findAll();
    }
    async findOne(acode) {
        return this.AcModel.findOne({
            where: {
                acode,
            },
        });
    }
    async findById(idno) {
        return this.AcModel.findOne({
            where: {
                idno,
            },
        });
    }
    async remove(idno) {
        const rec = await this.findById(idno);
        let u;
        if (rec) {
            u = await rec.destroy().then(t => t);
        }
        return u;
    }
};
AcService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(ac_model_1.AC)),
    __metadata("design:paramtypes", [Object])
], AcService);
exports.AcService = AcService;
//# sourceMappingURL=ac.service.js.map