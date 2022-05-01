"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.return_type_list = void 0;
const sequelize_1 = require("sequelize");
class return_type_list extends sequelize_1.Model {
    static initModel(sequelize) {
        return return_type_list.init({
            code: {
                type: sequelize_1.DataTypes.CHAR(4),
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'return_type_list',
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
exports.return_type_list = return_type_list;
//# sourceMappingURL=return_type_list.js.map