"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stock = void 0;
const sequelize_1 = require("sequelize");
class stock extends sequelize_1.Model {
    static initModel(sequelize) {
        return stock.init({
            idno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            pidno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            cidno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            edate: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            estatus: {
                type: sequelize_1.DataTypes.CHAR(2),
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
            Rec: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            Iss: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            loose_Rec: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            loose_Iss: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            balance: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            loose_balance: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            Amount: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            description: {
                type: sequelize_1.DataTypes.STRING(500),
                allowNull: true
            },
            refno: {
                type: sequelize_1.DataTypes.STRING(15),
                allowNull: true
            },
            Rate: {
                type: sequelize_1.DataTypes.DECIMAL(18, 4),
                allowNull: true
            },
            Avg_Rate: {
                type: sequelize_1.DataTypes.DECIMAL(18, 4),
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
            party: {
                type: sequelize_1.DataTypes.CHAR(24),
                allowNull: true,
                references: {
                    model: 'ac',
                    key: 'acode'
                }
            },
            Balance_Amount: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            Order_No: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            pcspctn: {
                type: sequelize_1.DataTypes.MEDIUMINT,
                allowNull: true
            },
            yard_rec: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            yard_iss: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            rate_yards: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'stock',
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
                    name: "IX_Stock",
                    using: "BTREE",
                    fields: [
                        { name: "cidno" },
                    ]
                },
                {
                    name: "IX_Stock_1",
                    using: "BTREE",
                    fields: [
                        { name: "edate" },
                    ]
                },
                {
                    name: "IX_Stock_2",
                    using: "BTREE",
                    fields: [
                        { name: "estatus" },
                    ]
                },
                {
                    name: "IX_Stock_3",
                    using: "BTREE",
                    fields: [
                        { name: "itemcode" },
                    ]
                },
                {
                    name: "IX_Stock_4",
                    using: "BTREE",
                    fields: [
                        { name: "Order_No" },
                    ]
                },
                {
                    name: "IX_Stock_5",
                    using: "BTREE",
                    fields: [
                        { name: "party" },
                    ]
                },
                {
                    name: "IX_Stock_6",
                    using: "BTREE",
                    fields: [
                        { name: "pidno" },
                    ]
                },
                {
                    name: "IX_Stock_7",
                    using: "BTREE",
                    fields: [
                        { name: "refno" },
                    ]
                },
                {
                    name: "IX_Stock_8",
                    using: "BTREE",
                    fields: [
                        { name: "Warehouse_Code" },
                    ]
                },
            ]
        });
    }
}
exports.stock = stock;
//# sourceMappingURL=stock.js.map