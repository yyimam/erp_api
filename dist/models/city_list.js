"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.city_list = void 0;
const sequelize_1 = require("sequelize");
class city_list extends sequelize_1.Model {
    static initModel(sequelize) {
        return city_list.init({
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
            tableName: 'city_list',
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
exports.city_list = city_list;
//# sourceMappingURL=city_list.js.map