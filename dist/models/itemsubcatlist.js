"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemsubcatlist = void 0;
const sequelize_1 = require("sequelize");
class itemsubcatlist extends sequelize_1.Model {
    static initModel(sequelize) {
        return itemsubcatlist.init({
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
            tableName: 'itemsubcatlist',
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
exports.itemsubcatlist = itemsubcatlist;
//# sourceMappingURL=itemsubcatlist.js.map