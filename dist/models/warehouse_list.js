"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.warehouse_list = void 0;
const sequelize_1 = require("sequelize");
class warehouse_list extends sequelize_1.Model {
    static initModel(sequelize) {
        return warehouse_list.init({
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
            tableName: 'warehouse_list',
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
exports.warehouse_list = warehouse_list;
//# sourceMappingURL=warehouse_list.js.map