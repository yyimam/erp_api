"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.payreq_detail = void 0;
const sequelize_1 = require("sequelize");
class payreq_detail extends sequelize_1.Model {
    static initModel(sequelize) {
        return payreq_detail.init({
            idno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            pidno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                references: {
                    model: 'payreq_master',
                    key: 'idno'
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
            description: {
                type: sequelize_1.DataTypes.STRING(250),
                allowNull: true
            },
            amount: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: true
            },
            chq_Date: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'payreq_detail',
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
                    name: "IX_PayReq_Detail",
                    using: "BTREE",
                    fields: [
                        { name: "chq_Date" },
                    ]
                },
                {
                    name: "IX_PayReq_Detail_1",
                    using: "BTREE",
                    fields: [
                        { name: "party" },
                    ]
                },
                {
                    name: "IX_PayReq_Detail_2",
                    using: "BTREE",
                    fields: [
                        { name: "pidno" },
                    ]
                },
            ]
        });
    }
}
exports.payreq_detail = payreq_detail;
//# sourceMappingURL=payreq_detail.js.map