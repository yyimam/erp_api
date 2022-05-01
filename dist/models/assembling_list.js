"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assembling_list = void 0;
const sequelize_1 = require("sequelize");
class assembling_list extends sequelize_1.Model {
    static initModel(sequelize) {
        return assembling_list.init({
            idno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            mainitemcode: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true,
                references: {
                    model: 'product',
                    key: 'code'
                }
            },
            subitemcode: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true,
                references: {
                    model: 'product',
                    key: 'code'
                }
            },
            description: {
                type: sequelize_1.DataTypes.STRING(250),
                allowNull: true
            },
            qty: {
                type: sequelize_1.DataTypes.DECIMAL(16, 6),
                allowNull: true
            },
            sysdate: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            entryno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            edate: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            disabled: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true
            },
            wastage_qty: {
                type: sequelize_1.DataTypes.DECIMAL(16, 6),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'assembling_list',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "idno" },
                    ]
                },
                {
                    name: "IX_Assembling_List",
                    using: "BTREE",
                    fields: [
                        { name: "mainitemcode" },
                    ]
                },
                {
                    name: "IX_Assembling_List_1",
                    using: "BTREE",
                    fields: [
                        { name: "subitemcode" },
                    ]
                },
                {
                    name: "IX_Assembling_List_2",
                    using: "BTREE",
                    fields: [
                        { name: "entryno" },
                    ]
                },
                {
                    name: "IX_Assembling_List_3",
                    using: "BTREE",
                    fields: [
                        { name: "edate" },
                    ]
                },
            ]
        });
    }
}
exports.assembling_list = assembling_list;
//# sourceMappingURL=assembling_list.js.map