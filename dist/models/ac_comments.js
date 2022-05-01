"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ac_comments = void 0;
const sequelize_1 = require("sequelize");
class ac_comments extends sequelize_1.Model {
    static initModel(sequelize) {
        return ac_comments.init({
            idno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            edate: {
                type: sequelize_1.DataTypes.DATE,
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
            user_id: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            sysuser: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            comments: {
                type: sequelize_1.DataTypes.STRING(1000),
                allowNull: true
            },
            ledger_refno: {
                type: sequelize_1.DataTypes.STRING(15),
                allowNull: true
            },
            ledger_date: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'ac_comments',
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
                    name: "IX_Ac_Comments",
                    using: "BTREE",
                    fields: [
                        { name: "edate" },
                    ]
                },
                {
                    name: "IX_Ac_Comments_1",
                    using: "BTREE",
                    fields: [
                        { name: "acode" },
                    ]
                },
                {
                    name: "IX_Ac_Comments_2",
                    using: "BTREE",
                    fields: [
                        { name: "user_id" },
                    ]
                },
                {
                    name: "IX_Ac_Comments_3",
                    using: "BTREE",
                    fields: [
                        { name: "ledger_date" },
                    ]
                },
            ]
        });
    }
}
exports.ac_comments = ac_comments;
//# sourceMappingURL=ac_comments.js.map