"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var product_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.product = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
let product = product_1 = class product extends sequelize_1.Model {
    static initModel(sequelize) {
        return product_1.init({
            code: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: false
            },
            itemtype: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: false,
                references: {
                    model: 'itemtype',
                    key: 'code'
                }
            },
            itemcat: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true,
                references: {
                    model: 'itemcat',
                    key: 'code'
                }
            },
            rate: {
                type: sequelize_1.DataTypes.DECIMAL(14, 4),
                allowNull: true
            },
            itemunit: {
                type: sequelize_1.DataTypes.STRING(6),
                allowNull: true
            },
            subitemcat: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true,
                references: {
                    model: 'itemsubcatlist',
                    key: 'code'
                }
            },
            brand: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true,
                references: {
                    model: 'itembrandlist',
                    key: 'code'
                }
            },
            prate: {
                type: sequelize_1.DataTypes.DECIMAL(14, 4),
                allowNull: true
            },
            origin: {
                type: sequelize_1.DataTypes.STRING(30),
                allowNull: true
            },
            pcspctn: {
                type: sequelize_1.DataTypes.MEDIUMINT,
                allowNull: true
            },
            schmper: {
                type: sequelize_1.DataTypes.DECIMAL(10, 4),
                allowNull: true
            },
            xschmper: {
                type: sequelize_1.DataTypes.DECIMAL(10, 4),
                allowNull: true
            },
            bonuspcs: {
                type: sequelize_1.DataTypes.MEDIUMINT,
                allowNull: true
            },
            article: {
                type: sequelize_1.DataTypes.STRING(30),
                allowNull: true
            },
            metrounit: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            pkcgtype: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            weight: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            measurment: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            barcode: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            minqty: {
                type: sequelize_1.DataTypes.DECIMAL(14, 2),
                allowNull: true
            },
            density: {
                type: sequelize_1.DataTypes.DECIMAL(8, 4),
                allowNull: true
            },
            Scrap: {
                type: sequelize_1.DataTypes.DECIMAL(8, 3),
                allowNull: true
            },
            filename: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            no_of_files: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            batch_id: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            round_in_matreq: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true
            },
            old_code: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true
            },
            item_disabled: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'product',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "code" },
                    ]
                },
                {
                    name: "IX_product",
                    using: "BTREE",
                    fields: [
                        { name: "article" },
                    ]
                },
                {
                    name: "IX_product_1",
                    using: "BTREE",
                    fields: [
                        { name: "barcode" },
                    ]
                },
                {
                    name: "IX_product_2",
                    using: "BTREE",
                    fields: [
                        { name: "batch_id" },
                    ]
                },
                {
                    name: "IX_product_3",
                    using: "BTREE",
                    fields: [
                        { name: "brand" },
                    ]
                },
                {
                    name: "IX_product_4",
                    using: "BTREE",
                    fields: [
                        { name: "itemcat" },
                    ]
                },
                {
                    name: "IX_product_5",
                    using: "BTREE",
                    fields: [
                        { name: "filename" },
                    ]
                },
                {
                    name: "IX_product_6",
                    using: "BTREE",
                    fields: [
                        { name: "itemtype" },
                    ]
                },
                {
                    name: "IX_product_7",
                    using: "BTREE",
                    fields: [
                        { name: "name" },
                    ]
                },
                {
                    name: "IX_product_8",
                    using: "BTREE",
                    fields: [
                        { name: "subitemcat" },
                    ]
                },
            ]
        });
    }
};
product = product_1 = __decorate([
    sequelize_typescript_1.Table
], product);
exports.product = product;
//# sourceMappingURL=product.js.map