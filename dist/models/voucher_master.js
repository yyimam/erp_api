"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.voucher_master = void 0;
const sequelize_1 = require("sequelize");
class voucher_master extends sequelize_1.Model {
    static initModel(sequelize) {
        return voucher_master.init({
            idno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            per: {
                type: sequelize_1.DataTypes.STRING(6),
                allowNull: true
            },
            vno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            vtype: {
                type: sequelize_1.DataTypes.STRING(2),
                allowNull: true
            },
            edate: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            sysdate: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            mainacode: {
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
            person: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            posted: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: false
            },
            ent_date: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            clearing_date: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            payreq_no: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            payreq_cidno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            itax_per: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            alert_posted: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true
            },
            doc_attached: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'voucher_master',
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
                    name: "IX_Voucher_Master",
                    using: "BTREE",
                    fields: [
                        { name: "chequeno" },
                    ]
                },
                {
                    name: "IX_Voucher_Master_1",
                    using: "BTREE",
                    fields: [
                        { name: "chq_date" },
                    ]
                },
                {
                    name: "IX_Voucher_Master_10",
                    using: "BTREE",
                    fields: [
                        { name: "vtype" },
                    ]
                },
                {
                    name: "IX_Voucher_Master_2",
                    using: "BTREE",
                    fields: [
                        { name: "clearing_date" },
                    ]
                },
                {
                    name: "IX_Voucher_Master_3",
                    using: "BTREE",
                    fields: [
                        { name: "edate" },
                    ]
                },
                {
                    name: "IX_Voucher_Master_4",
                    using: "BTREE",
                    fields: [
                        { name: "ent_date" },
                    ]
                },
                {
                    name: "IX_Voucher_Master_5",
                    using: "BTREE",
                    fields: [
                        { name: "mainacode" },
                    ]
                },
                {
                    name: "IX_Voucher_Master_6",
                    using: "BTREE",
                    fields: [
                        { name: "payreq_cidno" },
                    ]
                },
                {
                    name: "IX_Voucher_Master_7",
                    using: "BTREE",
                    fields: [
                        { name: "payreq_no" },
                    ]
                },
                {
                    name: "IX_Voucher_Master_8",
                    using: "BTREE",
                    fields: [
                        { name: "per" },
                    ]
                },
                {
                    name: "IX_Voucher_Master_9",
                    using: "BTREE",
                    fields: [
                        { name: "vno" },
                    ]
                },
            ]
        });
    }
}
exports.voucher_master = voucher_master;
//# sourceMappingURL=voucher_master.js.map