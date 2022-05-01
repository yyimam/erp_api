"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fin_ac = void 0;
const sequelize_1 = require("sequelize");
class fin_ac extends sequelize_1.Model {
    static initModel(sequelize) {
        return fin_ac.init({
            acode: {
                type: sequelize_1.DataTypes.CHAR(24),
                allowNull: false,
                primaryKey: true
            },
            title: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: false
            },
            curr_year: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            prev_year: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'fin_ac',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "acode" },
                    ]
                },
            ]
        });
    }
}
exports.fin_ac = fin_ac;
//# sourceMappingURL=fin_ac.js.map