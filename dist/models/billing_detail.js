"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.billing_detail = void 0;
const sequelize_1 = require("sequelize");
class billing_detail extends sequelize_1.Model {
    static initModel(sequelize) {
        return billing_detail.init({
            idno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            pidno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                references: {
                    model: 'billing_master',
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
            itemdiscount: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            expiry_date: {
                type: sequelize_1.DataTypes.DATE,
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
            pcspctn: {
                type: sequelize_1.DataTypes.MEDIUMINT,
                allowNull: true
            },
            bonuspcs: {
                type: sequelize_1.DataTypes.MEDIUMINT,
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
            oschmper: {
                type: sequelize_1.DataTypes.DECIMAL(10, 4),
                allowNull: true
            },
            oschmamt: {
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
            Warehouse_Code: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true,
                references: {
                    model: 'warehouse_list',
                    key: 'code'
                }
            },
            fitemcode: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true,
                references: {
                    model: 'product',
                    key: 'code'
                }
            },
            Warehouse_CodeInto: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true,
                references: {
                    model: 'warehouse_list',
                    key: 'code'
                }
            },
            rate_change: {
                type: sequelize_1.DataTypes.DECIMAL(14, 4),
                allowNull: true
            },
            MRP: {
                type: sequelize_1.DataTypes.DECIMAL(14, 4),
                allowNull: true
            },
            QC_Posted: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true
            },
            QC_Remarks: {
                type: sequelize_1.DataTypes.STRING(1000),
                allowNull: true
            },
            QC_Post_Date: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            batch_qty: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            iss_qty: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            req_qty: {
                type: sequelize_1.DataTypes.DECIMAL(18, 6),
                allowNull: true
            },
            batch_id: {
                type: sequelize_1.DataTypes.STRING(15),
                allowNull: true
            },
            promotion_sales: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true
            },
            Batch_Code: {
                type: sequelize_1.DataTypes.STRING(15),
                allowNull: true
            },
            itaxAmount: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            qty_yards: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            rate_yards: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            amount_yards: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            tailor_ac: {
                type: sequelize_1.DataTypes.CHAR(24),
                allowNull: true,
                references: {
                    model: 'ac',
                    key: 'acode'
                }
            },
            particular: {
                type: sequelize_1.DataTypes.STRING(250),
                allowNull: true
            },
            size: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            debit_Ac: {
                type: sequelize_1.DataTypes.CHAR(24),
                allowNull: true,
                references: {
                    model: 'ac',
                    key: 'acode'
                }
            },
            credit_Ac: {
                type: sequelize_1.DataTypes.CHAR(24),
                allowNull: true,
                references: {
                    model: 'ac',
                    key: 'acode'
                }
            },
            discountD: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'billing_detail',
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
                    name: "IX_billing_Detail",
                    using: "BTREE",
                    fields: [
                        { name: "batch_id" },
                    ]
                },
                {
                    name: "IX_billing_Detail_1",
                    using: "BTREE",
                    fields: [
                        { name: "fitemcode" },
                    ]
                },
                {
                    name: "IX_billing_Detail_2",
                    using: "BTREE",
                    fields: [
                        { name: "itemcode" },
                    ]
                },
                {
                    name: "IX_billing_Detail_3",
                    using: "BTREE",
                    fields: [
                        { name: "pidno" },
                    ]
                },
                {
                    name: "IX_billing_Detail_4",
                    using: "BTREE",
                    fields: [
                        { name: "Warehouse_Code" },
                    ]
                },
                {
                    name: "IX_billing_Detail_5",
                    using: "BTREE",
                    fields: [
                        { name: "Warehouse_CodeInto" },
                    ]
                },
                {
                    name: "FK_billing_detail_tailor_ac_ac",
                    using: "BTREE",
                    fields: [
                        { name: "tailor_ac" },
                    ]
                },
                {
                    name: "FK_Billing_Detail_debit_Ac_ac",
                    using: "BTREE",
                    fields: [
                        { name: "debit_Ac" },
                    ]
                },
                {
                    name: "FK_Billing_Detail_credit_Ac_ac",
                    using: "BTREE",
                    fields: [
                        { name: "credit_Ac" },
                    ]
                },
            ]
        });
    }
}
exports.billing_detail = billing_detail;
//# sourceMappingURL=billing_detail.js.map