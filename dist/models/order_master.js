"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order_master = void 0;
const sequelize_1 = require("sequelize");
class order_master extends sequelize_1.Model {
    static initModel(sequelize) {
        return order_master.init({
            idno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            EntryNo: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            RefNo: {
                type: sequelize_1.DataTypes.STRING(30),
                allowNull: true
            },
            edate: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            sysdate: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            party_ac: {
                type: sequelize_1.DataTypes.CHAR(24),
                allowNull: true,
                references: {
                    model: 'ac',
                    key: 'acode'
                }
            },
            estatus: {
                type: sequelize_1.DataTypes.STRING(2),
                allowNull: true
            },
            remarks: {
                type: sequelize_1.DataTypes.STRING(250),
                allowNull: true
            },
            gst: {
                type: sequelize_1.DataTypes.DECIMAL(6, 2),
                allowNull: true
            },
            gstAmount: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            sed: {
                type: sequelize_1.DataTypes.DECIMAL(6, 2),
                allowNull: true
            },
            sedAmount: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            disc_p: {
                type: sequelize_1.DataTypes.DECIMAL(6, 2),
                allowNull: true
            },
            discount: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            grossamount: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            netamount: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            Warehouse_Code: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true,
                references: {
                    model: 'warehouse_list',
                    key: 'code'
                }
            },
            Transporter: {
                type: sequelize_1.DataTypes.CHAR(24),
                allowNull: true,
                references: {
                    model: 'ac',
                    key: 'acode'
                }
            },
            DN_Address: {
                type: sequelize_1.DataTypes.STRING(250),
                allowNull: true
            },
            Circular_No: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            Invoice_No: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            Order_No: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            Vendor_No: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            Shop: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            ent_date: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            itemdescription: {
                type: sequelize_1.DataTypes.STRING(2000),
                allowNull: true
            },
            orderclosed: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true
            },
            posted: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true
            },
            ledgerbal: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            overdue: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            delivery_date: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            terms: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            DVC_Per: {
                type: sequelize_1.DataTypes.DECIMAL(7, 2),
                allowNull: true
            },
            DVC_Amount: {
                type: sequelize_1.DataTypes.DECIMAL(7, 2),
                allowNull: true
            },
            DVC_Remarks: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            dc_no: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            alert_posted: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true
            },
            size_by: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            fitted_by: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            salesman: {
                type: sequelize_1.DataTypes.CHAR(24),
                allowNull: true,
                references: {
                    model: 'ac',
                    key: 'acode'
                }
            },
            doc_attached: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true
            },
            customer_name: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            customer_address: {
                type: sequelize_1.DataTypes.STRING(250),
                allowNull: true
            },
            contact_no1: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            contact_no2: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'order_master',
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
                    name: "IX_Order_Master",
                    using: "BTREE",
                    fields: [
                        { name: "Circular_No" },
                    ]
                },
                {
                    name: "IX_Order_Master_1",
                    using: "BTREE",
                    fields: [
                        { name: "delivery_date" },
                    ]
                },
                {
                    name: "IX_Order_Master_12",
                    using: "BTREE",
                    fields: [
                        { name: "salesman" },
                    ]
                },
                {
                    name: "IX_Order_Master_11",
                    using: "BTREE",
                    fields: [
                        { name: "Warehouse_Code" },
                    ]
                },
                {
                    name: "IX_Order_Master_2",
                    using: "BTREE",
                    fields: [
                        { name: "edate" },
                    ]
                },
                {
                    name: "IX_Order_Master_3",
                    using: "BTREE",
                    fields: [
                        { name: "ent_date" },
                    ]
                },
                {
                    name: "IX_Order_Master_4",
                    using: "BTREE",
                    fields: [
                        { name: "EntryNo" },
                    ]
                },
                {
                    name: "IX_Order_Master_5",
                    using: "BTREE",
                    fields: [
                        { name: "estatus" },
                    ]
                },
                {
                    name: "IX_Order_Master_6",
                    using: "BTREE",
                    fields: [
                        { name: "customer_name" },
                    ]
                },
                {
                    name: "IX_Order_Master_7",
                    using: "BTREE",
                    fields: [
                        { name: "Order_No" },
                    ]
                },
                {
                    name: "IX_Order_Master_8",
                    using: "BTREE",
                    fields: [
                        { name: "party_ac" },
                    ]
                },
                {
                    name: "IX_Order_Master_9",
                    using: "BTREE",
                    fields: [
                        { name: "RefNo" },
                    ]
                },
                {
                    name: "IX_Order_Master_10",
                    using: "BTREE",
                    fields: [
                        { name: "contact_no1" },
                    ]
                },
                {
                    name: "IX_Order_Master_13",
                    using: "BTREE",
                    fields: [
                        { name: "contact_no2" },
                    ]
                },
                {
                    name: "FK_Order_Master_Ac_Transporter",
                    using: "BTREE",
                    fields: [
                        { name: "Transporter" },
                    ]
                },
            ]
        });
    }
}
exports.order_master = order_master;
//# sourceMappingURL=order_master.js.map