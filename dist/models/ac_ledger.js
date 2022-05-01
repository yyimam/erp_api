"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ac_ledger = void 0;
const sequelize_1 = require("sequelize");
class ac_ledger extends sequelize_1.Model {
    static initModel(sequelize) {
        return ac_ledger.init({
            idno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
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
                type: sequelize_1.DataTypes.STRING(5000),
                allowNull: true
            },
            edate: {
                type: sequelize_1.DataTypes.DATE,
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
            billno: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            ent_date: {
                type: sequelize_1.DataTypes.DATE,
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
            clearing_date: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            chq_date: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            chequeno: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            posted: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true
            },
            refno: {
                type: sequelize_1.DataTypes.STRING(15),
                allowNull: true
            },
            title2: {
                type: sequelize_1.DataTypes.STRING(70),
                allowNull: true
            },
            pidno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            itemdescription: {
                type: sequelize_1.DataTypes.STRING(2000),
                allowNull: true
            },
            doc_attached: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true
            },
            cidno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'ac_ledger',
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
                    name: "IX_billing_ledger",
                    using: "BTREE",
                    fields: [
                        { name: "acode" },
                    ]
                },
                {
                    name: "IX_Ac_Ledger",
                    using: "BTREE",
                    fields: [
                        { name: "billno" },
                    ]
                },
                {
                    name: "IX_Ac_Ledger_1",
                    using: "BTREE",
                    fields: [
                        { name: "chq_date" },
                    ]
                },
                {
                    name: "IX_Ac_Ledger_10",
                    using: "BTREE",
                    fields: [
                        { name: "Warehouse_Code" },
                    ]
                },
                {
                    name: "IX_Ac_Ledger_2",
                    using: "BTREE",
                    fields: [
                        { name: "clearing_date" },
                    ]
                },
                {
                    name: "IX_Ac_Ledger_3",
                    using: "BTREE",
                    fields: [
                        { name: "comtype" },
                    ]
                },
                {
                    name: "IX_Ac_Ledger_4",
                    using: "BTREE",
                    fields: [
                        { name: "edate" },
                    ]
                },
                {
                    name: "IX_Ac_Ledger_5",
                    using: "BTREE",
                    fields: [
                        { name: "ent_date" },
                    ]
                },
                {
                    name: "IX_Ac_Ledger_6",
                    using: "BTREE",
                    fields: [
                        { name: "estatus" },
                    ]
                },
                {
                    name: "IX_Ac_Ledger_7",
                    using: "BTREE",
                    fields: [
                        { name: "pidno" },
                    ]
                },
                {
                    name: "IX_Ac_Ledger_8",
                    using: "BTREE",
                    fields: [
                        { name: "refno" },
                    ]
                },
                {
                    name: "IX_Ac_Ledger_9",
                    using: "BTREE",
                    fields: [
                        { name: "title2" },
                    ]
                },
                {
                    name: "IX_Ac_Ledger_11",
                    using: "BTREE",
                    fields: [
                        { name: "cidno" },
                    ]
                },
            ]
        });
    }
}
exports.ac_ledger = ac_ledger;
//# sourceMappingURL=ac_ledger.js.map