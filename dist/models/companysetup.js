"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companysetup = void 0;
const sequelize_1 = require("sequelize");
class companysetup extends sequelize_1.Model {
    static initModel(sequelize) {
        return companysetup.init({
            code: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING(60),
                allowNull: true
            },
            address: {
                type: sequelize_1.DataTypes.STRING(250),
                allowNull: true
            },
            telno: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            stregno: {
                type: sequelize_1.DataTypes.STRING(30),
                allowNull: true
            },
            ntnno: {
                type: sequelize_1.DataTypes.STRING(30),
                allowNull: true
            },
            yearstart: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            yearend: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            protectdate: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            contactno: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            tcreditors: {
                type: sequelize_1.DataTypes.CHAR(24),
                allowNull: true
            },
            tdebitors: {
                type: sequelize_1.DataTypes.CHAR(24),
                allowNull: true
            },
            transporter: {
                type: sequelize_1.DataTypes.CHAR(24),
                allowNull: true,
                references: {
                    model: 'ac',
                    key: 'acode'
                }
            },
            sol_comm: {
                type: sequelize_1.DataTypes.CHAR(24),
                allowNull: true,
                references: {
                    model: 'ac',
                    key: 'acode'
                }
            },
            os_bilty: {
                type: sequelize_1.DataTypes.CHAR(24),
                allowNull: true,
                references: {
                    model: 'ac',
                    key: 'acode'
                }
            },
            show_stax_inv: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true
            },
            add_Inv_stock: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true
            },
            last_year_db_name: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            image_saving: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true
            },
            promotion: {
                type: sequelize_1.DataTypes.STRING(24),
                allowNull: true
            },
            doc_db: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            app_version: {
                type: sequelize_1.DataTypes.STRING(40),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'companysetup',
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
                {
                    name: "FK_companysetup_Ac_os_bilty",
                    using: "BTREE",
                    fields: [
                        { name: "os_bilty" },
                    ]
                },
                {
                    name: "FK_companysetup_Ac_sol_comm",
                    using: "BTREE",
                    fields: [
                        { name: "sol_comm" },
                    ]
                },
                {
                    name: "FK_companysetup_Ac_Transporter",
                    using: "BTREE",
                    fields: [
                        { name: "transporter" },
                    ]
                },
            ]
        });
    }
}
exports.companysetup = companysetup;
//# sourceMappingURL=companysetup.js.map