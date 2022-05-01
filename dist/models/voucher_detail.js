"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.voucher_detail = void 0;
const sequelize_1 = require("sequelize");
class voucher_detail extends sequelize_1.Model {
    static initModel(sequelize) {
        return voucher_detail.init({
            idno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            pidno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                references: {
                    model: 'voucher_master',
                    key: 'idno'
                }
            },
            vtype: {
                type: sequelize_1.DataTypes.STRING(2),
                allowNull: true
            },
            acode: {
                type: sequelize_1.DataTypes.CHAR(24),
                allowNull: true,
                references: {
                    model: 'ac',
                    key: 'acode'
                }
            },
            descrip: {
                type: sequelize_1.DataTypes.STRING(500),
                allowNull: true
            },
            debit: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            credit: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            billno: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            product: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true,
                references: {
                    model: 'product',
                    key: 'code'
                }
            },
            qty: {
                type: sequelize_1.DataTypes.DECIMAL(12, 2),
                allowNull: true
            },
            comtype: {
                type: sequelize_1.DataTypes.CHAR(24),
                allowNull: true,
                references: {
                    model: 'ac',
                    key: 'acode'
                }
            },
            chequeno: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            chq_date: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            itax_acode: {
                type: sequelize_1.DataTypes.CHAR(24),
                allowNull: true,
                references: {
                    model: 'ac',
                    key: 'acode'
                }
            },
            itax_Amt: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            itax_inv: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            chalan_rec: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true
            },
            gst_inv: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            gstval: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            gst: {
                type: sequelize_1.DataTypes.DECIMAL(6, 2),
                allowNull: true
            },
            doc_attached: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true
            },
            voucherno: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'voucher_detail',
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
                    name: "IX_Voucher_Detail",
                    using: "BTREE",
                    fields: [
                        { name: "acode" },
                    ]
                },
                {
                    name: "IX_Voucher_Detail_1",
                    using: "BTREE",
                    fields: [
                        { name: "billno" },
                    ]
                },
                {
                    name: "IX_Voucher_Detail_2",
                    using: "BTREE",
                    fields: [
                        { name: "chequeno" },
                    ]
                },
                {
                    name: "IX_Voucher_Detail_3",
                    using: "BTREE",
                    fields: [
                        { name: "chq_date" },
                    ]
                },
                {
                    name: "IX_Voucher_Detail_4",
                    using: "BTREE",
                    fields: [
                        { name: "comtype" },
                    ]
                },
                {
                    name: "IX_Voucher_Detail_5",
                    using: "BTREE",
                    fields: [
                        { name: "pidno" },
                    ]
                },
                {
                    name: "FK_Voucher_Detail_product",
                    using: "BTREE",
                    fields: [
                        { name: "product" },
                    ]
                },
                {
                    name: "FK_Voucher_Detail_itax_acode_Ac",
                    using: "BTREE",
                    fields: [
                        { name: "itax_acode" },
                    ]
                },
            ]
        });
    }
}
exports.voucher_detail = voucher_detail;
//# sourceMappingURL=voucher_detail.js.map