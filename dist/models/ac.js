"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ac = void 0;
const sequelize_1 = require("sequelize");
class ac extends sequelize_1.Model {
    static initModel(sequelize) {
        return ac.init({
            acode: {
                type: sequelize_1.DataTypes.CHAR(24),
                allowNull: false,
                primaryKey: true
            },
            title: {
                type: sequelize_1.DataTypes.STRING(70),
                allowNull: true
            },
            address: {
                type: sequelize_1.DataTypes.STRING(250),
                allowNull: true
            },
            type: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            clevel: {
                type: sequelize_1.DataTypes.STRING(1),
                allowNull: true
            },
            parent: {
                type: sequelize_1.DataTypes.CHAR(24),
                allowNull: true,
                references: {
                    model: 'ac',
                    key: 'acode'
                }
            },
            stregno: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            ntnno: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            lastbal: {
                type: sequelize_1.DataTypes.DECIMAL(14, 2),
                allowNull: true
            },
            cash_bank: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true
            },
            aging: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true
            },
            old_acode: {
                type: sequelize_1.DataTypes.CHAR(24),
                allowNull: true
            },
            parentsname: {
                type: sequelize_1.DataTypes.STRING(600),
                allowNull: true
            },
            Credit_Days: {
                type: sequelize_1.DataTypes.SMALLINT,
                allowNull: true
            },
            vehicleno: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            emboss_line: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            transporter: {
                type: sequelize_1.DataTypes.CHAR(24),
                allowNull: true
            },
            sol_com: {
                type: sequelize_1.DataTypes.DECIMAL(6, 2),
                allowNull: true
            },
            osb_com: {
                type: sequelize_1.DataTypes.DECIMAL(6, 2),
                allowNull: true
            },
            discount: {
                type: sequelize_1.DataTypes.DECIMAL(6, 2),
                allowNull: true
            },
            cr_limit: {
                type: sequelize_1.DataTypes.DECIMAL(12, 2),
                allowNull: true
            },
            contactperson: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            telno: {
                type: sequelize_1.DataTypes.STRING(70),
                allowNull: true
            },
            Show_in_Aging: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true
            },
            depart1: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            contact_person1: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            contact_mobile1: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            email1: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            depart2: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            contact_person2: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            contact_mobile2: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            email2: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            depart3: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            contact_person3: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            contact_mobile3: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            email3: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            lockuser: {
                type: sequelize_1.DataTypes.STRING(250),
                allowNull: true
            },
            citycode: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true,
                references: {
                    model: 'city_list',
                    key: 'code'
                }
            },
            groupcode: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true,
                references: {
                    model: 'group_list',
                    key: 'code'
                }
            }
        }, {
            sequelize,
            tableName: 'ac',
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
                {
                    name: "IX_ac",
                    using: "BTREE",
                    fields: [
                        { name: "title" },
                    ]
                },
                {
                    name: "IX_ac_1",
                    using: "BTREE",
                    fields: [
                        { name: "parent" },
                    ]
                },
                {
                    name: "IX_ac_2",
                    using: "BTREE",
                    fields: [
                        { name: "type" },
                    ]
                },
                {
                    name: "IX_ac_3",
                    using: "BTREE",
                    fields: [
                        { name: "transporter" },
                    ]
                },
                {
                    name: "IX_ac_4",
                    using: "BTREE",
                    fields: [
                        { name: "citycode" },
                    ]
                },
                {
                    name: "IX_ac_5",
                    using: "BTREE",
                    fields: [
                        { name: "groupcode" },
                    ]
                },
            ]
        });
    }
}
exports.ac = ac;
//# sourceMappingURL=ac.js.map