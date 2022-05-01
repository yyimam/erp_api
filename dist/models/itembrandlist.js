"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itembrandlist = void 0;
const sequelize_1 = require("sequelize");
class itembrandlist extends sequelize_1.Model {
    static initModel(sequelize) {
        return itembrandlist.init({
            code: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'itembrandlist',
            timestamps: false,
            indexes: [
                {
                    name: "PRIMARY",
                    unique: true,
                    using: "BTREE",
                    fields: [
                        { name: "code" },
                    ]
                },
            ]
        });
    }
}
exports.itembrandlist = itembrandlist;
//# sourceMappingURL=itembrandlist.js.map