"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fin_notes_master = void 0;
const sequelize_1 = require("sequelize");
class fin_notes_master extends sequelize_1.Model {
    static initModel(sequelize) {
        return fin_notes_master.init({
            idno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            note_no: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                unique: "IX_fin_notes_master"
            },
            notedate: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            sysdate: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'fin_notes_master',
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
                    name: "IX_fin_notes_master",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "note_no" },
                    ]
                },
            ]
        });
    }
}
exports.fin_notes_master = fin_notes_master;
//# sourceMappingURL=fin_notes_master.js.map