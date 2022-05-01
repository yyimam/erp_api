"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.payreq_master = void 0;
const sequelize_1 = require("sequelize");
class payreq_master extends sequelize_1.Model {
    static initModel(sequelize) {
        return payreq_master.init({
            idno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            EntryNo: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false
            },
            edate: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            refno: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            remarks: {
                type: sequelize_1.DataTypes.STRING(250),
                allowNull: true
            },
            loginuserid: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'payreq_master',
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
                    name: "IX_PayReq_Master",
                    using: "BTREE",
                    fields: [
                        { name: "edate" },
                    ]
                },
                {
                    name: "IX_PayReq_Master_1",
                    using: "BTREE",
                    fields: [
                        { name: "EntryNo" },
                    ]
                },
                {
                    name: "IX_PayReq_Master_2",
                    using: "BTREE",
                    fields: [
                        { name: "loginuserid" },
                    ]
                },
                {
                    name: "IX_PayReq_Master_3",
                    using: "BTREE",
                    fields: [
                        { name: "refno" },
                    ]
                },
            ]
        });
    }
}
exports.payreq_master = payreq_master;
//# sourceMappingURL=payreq_master.js.map