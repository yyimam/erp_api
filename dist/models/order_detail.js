"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order_detail = void 0;
const sequelize_1 = require("sequelize");
class order_detail extends sequelize_1.Model {
    static initModel(sequelize) {
        return order_detail.init({
            idno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            pidno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                references: {
                    model: 'order_master',
                    key: 'idno'
                }
            },
            estatus: {
                type: sequelize_1.DataTypes.STRING(2),
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
            description: {
                type: sequelize_1.DataTypes.STRING(250),
                allowNull: true
            },
            itemunit: {
                type: sequelize_1.DataTypes.STRING(6),
                allowNull: true
            },
            amount: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            sed: {
                type: sequelize_1.DataTypes.DECIMAL(6, 2),
                allowNull: true
            },
            sedamount: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            gst: {
                type: sequelize_1.DataTypes.DECIMAL(6, 2),
                allowNull: true
            },
            gstamount: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            netamount: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            pcspctn: {
                type: sequelize_1.DataTypes.MEDIUMINT,
                allowNull: true
            },
            loose_qty: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            qty_in_pcs: {
                type: sequelize_1.DataTypes.DECIMAL(14, 2),
                allowNull: true
            },
            bonuspcs: {
                type: sequelize_1.DataTypes.MEDIUMINT,
                allowNull: true
            },
            itemdiscount: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            itemdiscount_P: {
                type: sequelize_1.DataTypes.DECIMAL(6, 2),
                allowNull: true
            },
            schmper: {
                type: sequelize_1.DataTypes.DECIMAL(10, 4),
                allowNull: true
            },
            schmamt: {
                type: sequelize_1.DataTypes.DECIMAL(14, 2),
                allowNull: true
            },
            xschmper: {
                type: sequelize_1.DataTypes.DECIMAL(10, 4),
                allowNull: true
            },
            xschmamt: {
                type: sequelize_1.DataTypes.DECIMAL(14, 2),
                allowNull: true
            },
            qty: {
                type: sequelize_1.DataTypes.DECIMAL(14, 2),
                allowNull: true
            },
            rate: {
                type: sequelize_1.DataTypes.DECIMAL(14, 2),
                allowNull: true
            },
            delivery_date: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            MRP: {
                type: sequelize_1.DataTypes.DECIMAL(14, 4),
                allowNull: true
            },
            promotion_sales: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true
            },
            particular: {
                type: sequelize_1.DataTypes.STRING(250),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'order_detail',
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
                    name: "IX_Order_Detail",
                    using: "BTREE",
                    fields: [
                        { name: "delivery_date" },
                    ]
                },
                {
                    name: "IX_Order_Detail_1",
                    using: "BTREE",
                    fields: [
                        { name: "itemcode" },
                    ]
                },
                {
                    name: "IX_Order_Detail_2",
                    using: "BTREE",
                    fields: [
                        { name: "pidno" },
                    ]
                },
            ]
        });
    }
}
exports.order_detail = order_detail;
//# sourceMappingURL=order_detail.js.map