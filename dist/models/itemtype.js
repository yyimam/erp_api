"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemtype = void 0;
const sequelize_1 = require("sequelize");
class itemtype extends sequelize_1.Model {
    static initModel(sequelize) {
        return itemtype.init({
            code: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'itemtype',
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
exports.itemtype = itemtype;
//# sourceMappingURL=itemtype.js.map