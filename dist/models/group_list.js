"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.group_list = void 0;
const sequelize_1 = require("sequelize");
class group_list extends sequelize_1.Model {
    static initModel(sequelize) {
        return group_list.init({
            code: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING(60),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'group_list',
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
exports.group_list = group_list;
//# sourceMappingURL=group_list.js.map