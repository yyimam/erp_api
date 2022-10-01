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
exports.UsersService = void 0;
const userManagement_model_1 = require("../utility/management/userManagement/models/userManagement.model");
const sequelize_1 = require("@nestjs/sequelize");
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor(UserManagementModel) {
        this.UserManagementModel = UserManagementModel;
        this.users = [
            {
                userId: 1,
                email: 'admin@halfmanengineering.com',
                password: 'pass@work1',
            },
            {
                userId: 2,
                email: 'maria',
                password: 'guess',
            },
            {
                userId: 2,
                email: 'admin',
                password: 'guess',
            },
        ];
    }
    async findOne(email) {
        console.log("wirubg3", email);
        return this.UserManagementModel.findOne({
            where: {
                email
            },
        });
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, sequelize_1.InjectModel(userManagement_model_1.UserManagement)),
    __metadata("design:paramtypes", [Object])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map