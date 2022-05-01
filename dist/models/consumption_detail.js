"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.consumption_detail = void 0;
const sequelize_1 = require("sequelize");
class consumption_detail extends sequelize_1.Model {
    static initModel(sequelize) {
        return consumption_detail.init({
            EntryNo: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            edate: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            itemcode: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true,
                references: {
                    model: 'product',
                    key: 'code'
                }
            },
            produceqty: {
                type: sequelize_1.DataTypes.DECIMAL(14, 2),
                allowNull: true
            },
            pidno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            cidno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            estatus: {
                type: sequelize_1.DataTypes.STRING(2),
                allowNull: true
            },
            Warehouse_Code: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true,
                references: {
                    model: 'warehouse_list',
                    key: 'code'
                }
            },
            remarks: {
                type: sequelize_1.DataTypes.STRING(250),
                allowNull: true
            },
            productname: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            cproductname: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            consumeqty: {
                type: sequelize_1.DataTypes.DECIMAL(31, 8),
                allowNull: true
            },
            subitemcode: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true,
                references: {
                    model: 'product',
                    key: 'code'
                }
            },
            AL_Entryno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            batch_id: {
                type: sequelize_1.DataTypes.STRING(15),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'consumption_detail',
            timestamps: false,
            indexes: [
                {
                    name: "IX_Consumption_Detail",
                    using: "BTREE",
                    fields: [
                        { name: "AL_Entryno" },
                    ]
                },
                {
                    name: "IX_Consumption_Detail_1",
                    using: "BTREE",
                    fields: [
                        { name: "batch_id" },
                    ]
                },
                {
                    name: "IX_Consumption_Detail_10",
                    using: "BTREE",
                    fields: [
                        { name: "Warehouse_Code" },
                    ]
                },
                {
                    name: "IX_Consumption_Detail_2",
                    using: "BTREE",
                    fields: [
                        { name: "cidno" },
                    ]
                },
                {
                    name: "IX_Consumption_Detail_3",
                    using: "BTREE",
                    fields: [
                        { name: "cproductname" },
                    ]
                },
                {
                    name: "IX_Consumption_Detail_4",
                    using: "BTREE",
                    fields: [
                        { name: "edate" },
                    ]
                },
                {
                    name: "IX_Consumption_Detail_5",
                    using: "BTREE",
                    fields: [
                        { name: "EntryNo" },
                    ]
                },
                {
                    name: "IX_Consumption_Detail_6",
                    using: "BTREE",
                    fields: [
                        { name: "estatus" },
                    ]
                },
                {
                    name: "IX_Consumption_Detail_7",
                    using: "BTREE",
                    fields: [
                        { name: "itemcode" },
                    ]
                },
                {
                    name: "IX_Consumption_Detail_8",
                    using: "BTREE",
                    fields: [
                        { name: "pidno" },
                    ]
                },
                {
                    name: "IX_Consumption_Detail_9",
                    using: "BTREE",
                    fields: [
                        { name: "subitemcode" },
                    ]
                },
            ]
        });
    }
}
exports.consumption_detail = consumption_detail;
//# sourceMappingURL=consumption_detail.js.map