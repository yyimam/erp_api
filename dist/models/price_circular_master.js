"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.price_circular_master = void 0;
const sequelize_1 = require("sequelize");
class price_circular_master extends sequelize_1.Model {
    static initModel(sequelize) {
        return price_circular_master.init({
            idno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            EntryNo: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false
            },
            edate: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            remarks: {
                type: sequelize_1.DataTypes.STRING(250),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'price_circular_master',
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
                    name: "IX_Price_Circular_Master",
                    using: "BTREE",
                    fields: [
                        { name: "edate" },
                    ]
                },
                {
                    name: "IX_Price_Circular_Master_1",
                    using: "BTREE",
                    fields: [
                        { name: "EntryNo" },
                    ]
                },
            ]
        });
    }
}
exports.price_circular_master = price_circular_master;
//# sourceMappingURL=price_circular_master.js.map