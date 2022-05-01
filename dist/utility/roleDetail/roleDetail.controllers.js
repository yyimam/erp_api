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
exports.RoleDetailController = void 0;
const create_roleDetail_dto_1 = require("./dto/create-roleDetail.dto");
const roleDetail_service_1 = require("./roleDetail.service");
const common_1 = require("@nestjs/common");
let RoleDetailController = class RoleDetailController {
    constructor(RoleDetailsService) {
        this.RoleDetailsService = RoleDetailsService;
    }
    async create(createRoleDetailDto, res) {
        return this.RoleDetailsService.create(createRoleDetailDto)
            .then(rec => {
            res.status(common_1.HttpStatus.CREATED).send(rec);
        })
            .catch(err => {
            res.status(common_1.HttpStatus.BAD_REQUEST).send(err.parent);
        });
    }
    async update(code, updateRoleDetailDto, res) {
        this.RoleDetailsService.update(code, updateRoleDetailDto)
            .then(rec => {
            res.status(common_1.HttpStatus.OK).send({ message: "record updated" });
        })
            .catch(err => {
            res.status(common_1.HttpStatus.BAD_REQUEST).send(err.parent);
        });
    }
    async findAll() {
        return this.RoleDetailsService.findAll();
    }
    async findOne(code) {
        return this.RoleDetailsService.findOne(code);
    }
    async remove(code) {
        return this.RoleDetailsService.remove(code);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_roleDetail_dto_1.CreateRoleDetailDto, Object]),
    __metadata("design:returntype", Promise)
], RoleDetailController.prototype, "create", null);
__decorate([
    common_1.Put(':code'),
    __param(0, common_1.Param('code')),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_roleDetail_dto_1.CreateRoleDetailDto, Object]),
    __metadata("design:returntype", Promise)
], RoleDetailController.prototype, "update", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoleDetailController.prototype, "findAll", null);
__decorate([
    common_1.Get(':code'),
    __param(0, common_1.Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoleDetailController.prototype, "findOne", null);
__decorate([
    common_1.Delete(':code'),
    __param(0, common_1.Param('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoleDetailController.prototype, "remove", null);
RoleDetailController = __decorate([
    common_1.Controller('role-detail'),
    __metadata("design:paramtypes", [roleDetail_service_1.RoleDetailService])
], RoleDetailController);
exports.RoleDetailController = RoleDetailController;
//# sourceMappingURL=roleDetail.controllers.js.map