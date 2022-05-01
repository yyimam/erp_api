"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemcat = void 0;
const sequelize_1 = require("sequelize");
class itemcat extends sequelize_1.Model {
    static initModel(sequelize) {
        return itemcat.init({
            code: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING(60),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'itemcat',
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
exports.itemcat = itemcat;
//# sourceMappingURL=itemcat.js.map