"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fin_notes_detail = void 0;
const sequelize_1 = require("sequelize");
class fin_notes_detail extends sequelize_1.Model {
    static initModel(sequelize) {
        return fin_notes_detail.init({
            idno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            pidno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                references: {
                    model: 'fin_notes_master',
                    key: 'idno'
                }
            },
            sno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            descrip: {
                type: sequelize_1.DataTypes.STRING(250),
                allowNull: true
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
            type: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            ref_noteno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true,
                references: {
                    model: 'fin_notes_master',
                    key: 'note_no'
                }
            }
        }, {
            sequelize,
            tableName: 'fin_notes_detail',
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
                    name: "FK_fin_notes_detail_ac",
                    using: "BTREE",
                    fields: [
                        { name: "ac_acode" },
                    ]
                },
                {
                    name: "FK_fin_notes_detail_fin_ac",
                    using: "BTREE",
                    fields: [
                        { name: "fin_acode" },
                    ]
                },
                {
                    name: "FK_fin_notes_detail_fin_notes_master",
                    using: "BTREE",
                    fields: [
                        { name: "pidno" },
                    ]
                },
                {
                    name: "FK_fin_notes_detail_master_noteno",
                    using: "BTREE",
                    fields: [
                        { name: "ref_noteno" },
                    ]
                },
            ]
        });
    }
}
exports.fin_notes_detail = fin_notes_detail;
//# sourceMappingURL=fin_notes_detail.js.map