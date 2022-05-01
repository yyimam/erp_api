"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.price_circular_detail = void 0;
const sequelize_1 = require("sequelize");
class price_circular_detail extends sequelize_1.Model {
    static initModel(sequelize) {
        return price_circular_detail.init({
            idno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            pidno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                references: {
                    model: 'price_circular_master',
                    key: 'idno'
                }
            },
            itemcode: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true,
                references: {
                    model: 'product',
                    key: 'code'
                }
            },
            rate: {
                type: sequelize_1.DataTypes.DECIMAL(12, 4),
                allowNull: true,
                defaultValue: 0.0000
            },
            schmper: {
                type: sequelize_1.DataTypes.DECIMAL(8, 4),
                allowNull: true,
                defaultValue: 0.0000
            },
            bonuspcs: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true,
                defaultValue: 0
            },
            MRP: {
                type: sequelize_1.DataTypes.DECIMAL(14, 4),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'price_circular_detail',
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
                    name: "FK_Price_Circular_Detail_Price_Circular_Master",
                    using: "BTREE",
                    fields: [
                        { name: "pidno" },
                    ]
                },
                {
                    name: "FK_Price_Circular_Detail_Product",
                    using: "BTREE",
                    fields: [
                        { name: "itemcode" },
                    ]
                },
            ]
        });
    }
}
exports.price_circular_detail = price_circular_detail;
//# sourceMappingURL=price_circular_detail.js.map