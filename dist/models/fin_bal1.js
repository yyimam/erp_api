"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fin_bal1 = void 0;
const sequelize_1 = require("sequelize");
class fin_bal1 extends sequelize_1.Model {
    static initModel(sequelize) {
        return fin_bal1.init({
            idno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            sno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            descrip: {
                type: sequelize_1.DataTypes.STRING(250),
                allowNull: true
            },
            note_no: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true,
                references: {
                    model: 'fin_notes_master',
                    key: 'note_no'
                }
            },
            fin_acode: {
                type: sequelize_1.DataTypes.CHAR(24),
                allowNull: true,
                references: {
                    model: 'fin_ac',
                    key: 'acode'
                }
            },
            ac_acode: {
                type: sequelize_1.DataTypes.CHAR(24),
                allowNull: true,
                references: {
                    model: 'ac',
                    key: 'acode'
                }
            },
            calc1: {
                type: sequelize_1.DataTypes.STRING(15),
                allowNull: true
            },
            calc2: {
                type: sequelize_1.DataTypes.STRING(15),
                allowNull: true
            },
            lines: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            sysdate: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'fin_bal1',
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
                    name: "FK_fin_bal1_ac",
                    using: "BTREE",
                    fields: [
                        { name: "ac_acode" },
                    ]
                },
                {
                    name: "FK_fin_bal1_fin_ac",
                    using: "BTREE",
                    fields: [
                        { name: "fin_acode" },
                    ]
                },
                {
                    name: "FK_fin_bal1_fin_master_noteno",
                    using: "BTREE",
                    fields: [
                        { name: "note_no" },
                    ]
                },
            ]
        });
    }
}
exports.fin_bal1 = fin_bal1;
//# sourceMappingURL=fin_bal1.js.map