"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.billing_master = void 0;
const sequelize_1 = require("sequelize");
class billing_master extends sequelize_1.Model {
    static initModel(sequelize) {
        return billing_master.init({
            idno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true
            },
            EntryNo: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            billno: {
                type: sequelize_1.DataTypes.STRING(10),
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
            dr_cr_ac: {
                type: sequelize_1.DataTypes.CHAR(24),
                allowNull: true,
                references: {
                    model: 'ac',
                    key: 'acode'
                }
            },
            dcno: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            estatus: {
                type: sequelize_1.DataTypes.STRING(2),
                allowNull: true
            },
            order_no: {
                type: sequelize_1.DataTypes.BIGINT,
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
            gstinv: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            gst_ac: {
                type: sequelize_1.DataTypes.CHAR(24),
                allowNull: true,
                references: {
                    model: 'ac',
                    key: 'acode'
                }
            },
            sed: {
                type: sequelize_1.DataTypes.DECIMAL(6, 2),
                allowNull: true
            },
            sedAmount: {
                type: sequelize_1.DataTypes.DECIMAL(18, 2),
                allowNull: true
            },
            sed_ac: {
                type: sequelize_1.DataTypes.CHAR(24),
                allowNull: true,
                references: {
                    model: 'ac',
                    key: 'acode'
                }
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
            etime: {
                type: sequelize_1.DataTypes.STRING(5),
                allowNull: true
            },
            terms: {
                type: sequelize_1.DataTypes.STRING(10),
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
            doentryno: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            ent_date: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            Credit_Days: {
                type: sequelize_1.DataTypes.SMALLINT,
                allowNull: true
            },
            Circular_No: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            Vehicle_No: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            duedate: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            Vendor_No: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            r_No: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            rvno: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            rvdate: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            },
            Shop: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            sol_com: {
                type: sequelize_1.DataTypes.DECIMAL(6, 2),
                allowNull: true
            },
            sol_comA: {
                type: sequelize_1.DataTypes.DECIMAL(12, 2),
                allowNull: true
            },
            osb_com: {
                type: sequelize_1.DataTypes.DECIMAL(6, 2),
                allowNull: true
            },
            osb_comA: {
                type: sequelize_1.DataTypes.DECIMAL(12, 2),
                allowNull: true
            },
            freight: {
                type: sequelize_1.DataTypes.DECIMAL(12, 2),
                allowNull: true
            },
            Transporter: {
                type: sequelize_1.DataTypes.CHAR(24),
                allowNull: true,
                references: {
                    model: 'ac',
                    key: 'acode'
                }
            },
            porder_no: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            return_type: {
                type: sequelize_1.DataTypes.CHAR(4),
                allowNull: true,
                references: {
                    model: 'return_type_list',
                    key: 'code'
                }
            },
            oldcirno: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            dincentp: {
                type: sequelize_1.DataTypes.DECIMAL(6, 2),
                allowNull: true
            },
            dincentamt: {
                type: sequelize_1.DataTypes.DECIMAL(12, 2),
                allowNull: true
            },
            dincentac: {
                type: sequelize_1.DataTypes.CHAR(24),
                allowNull: true,
                references: {
                    model: 'ac',
                    key: 'acode'
                }
            },
            grn_no: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            dc_no: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            posted: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true
            },
            biltyno: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            mir_No: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            gor_No: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            container_no: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            seal_no: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true
            },
            period: {
                type: sequelize_1.DataTypes.STRING(6),
                allowNull: true
            },
            bilty_filename: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            itemdescription: {
                type: sequelize_1.DataTypes.STRING(8000),
                allowNull: true
            },
            grn_closed: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true
            },
            fitem_code: {
                type: sequelize_1.DataTypes.CHAR(10),
                allowNull: true,
                references: {
                    model: 'product',
                    key: 'code'
                }
            },
            batch_qty: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            Recipe_No: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            batch_id: {
                type: sequelize_1.DataTypes.STRING(15),
                allowNull: true
            },
            batch_id_no: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            mat_type: {
                type: sequelize_1.DataTypes.CHAR(2),
                allowNull: true
            },
            dc_no_SR: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            S_dc_no: {
                type: sequelize_1.DataTypes.BIGINT,
                allowNull: true
            },
            transporter_name: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            alert_posted: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true
            },
            file_name: {
                type: sequelize_1.DataTypes.STRING(50),
                allowNull: true
            },
            gpno: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            doc_attached: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: true
            },
            post_date: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'billing_master',
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
                    name: "IX_billing_Master",
                    using: "BTREE",
                    fields: [
                        { name: "batch_id" },
                    ]
                },
                {
                    name: "IX_billing_Master_1",
                    using: "BTREE",
                    fields: [
                        { name: "batch_id_no" },
                    ]
                },
                {
                    name: "IX_billing_Master_10",
                    using: "BTREE",
                    fields: [
                        { name: "ent_date" },
                    ]
                },
                {
                    name: "IX_billing_Master_11",
                    using: "BTREE",
                    fields: [
                        { name: "estatus" },
                    ]
                },
                {
                    name: "IX_billing_Master_12",
                    using: "BTREE",
                    fields: [
                        { name: "fitem_code" },
                    ]
                },
                {
                    name: "IX_billing_Master_13",
                    using: "BTREE",
                    fields: [
                        { name: "gst_ac" },
                    ]
                },
                {
                    name: "IX_billing_Master_14",
                    using: "BTREE",
                    fields: [
                        { name: "mat_type" },
                    ]
                },
                {
                    name: "IX_billing_Master_15",
                    using: "BTREE",
                    fields: [
                        { name: "mir_No" },
                    ]
                },
                {
                    name: "IX_billing_Master_16",
                    using: "BTREE",
                    fields: [
                        { name: "order_no" },
                    ]
                },
                {
                    name: "IX_billing_Master_17",
                    using: "BTREE",
                    fields: [
                        { name: "party_ac" },
                    ]
                },
                {
                    name: "IX_billing_Master_18",
                    using: "BTREE",
                    fields: [
                        { name: "porder_no" },
                    ]
                },
                {
                    name: "IX_billing_Master_19",
                    using: "BTREE",
                    fields: [
                        { name: "period" },
                    ]
                },
                {
                    name: "IX_billing_Master_2",
                    using: "BTREE",
                    fields: [
                        { name: "billno" },
                    ]
                },
                {
                    name: "IX_billing_Master_20",
                    using: "BTREE",
                    fields: [
                        { name: "Recipe_No" },
                    ]
                },
                {
                    name: "IX_billing_Master_21",
                    using: "BTREE",
                    fields: [
                        { name: "return_type" },
                    ]
                },
                {
                    name: "IX_billing_Master_22",
                    using: "BTREE",
                    fields: [
                        { name: "sed_ac" },
                    ]
                },
                {
                    name: "IX_billing_Master_23",
                    using: "BTREE",
                    fields: [
                        { name: "Transporter" },
                    ]
                },
                {
                    name: "IX_billing_Master_24",
                    using: "BTREE",
                    fields: [
                        { name: "Warehouse_Code" },
                    ]
                },
                {
                    name: "IX_billing_Master_3",
                    using: "BTREE",
                    fields: [
                        { name: "Circular_No" },
                    ]
                },
                {
                    name: "IX_billing_Master_4",
                    using: "BTREE",
                    fields: [
                        { name: "dc_no" },
                    ]
                },
                {
                    name: "IX_billing_Master_5",
                    using: "BTREE",
                    fields: [
                        { name: "dcno" },
                    ]
                },
                {
                    name: "IX_billing_Master_6",
                    using: "BTREE",
                    fields: [
                        { name: "dincentac" },
                    ]
                },
                {
                    name: "IX_billing_Master_7",
                    using: "BTREE",
                    fields: [
                        { name: "doentryno" },
                    ]
                },
                {
                    name: "IX_billing_Master_8",
                    using: "BTREE",
                    fields: [
                        { name: "dr_cr_ac" },
                    ]
                },
                {
                    name: "IX_billing_Master_9",
                    using: "BTREE",
                    fields: [
                        { name: "edate" },
                    ]
                },
                {
                    name: "IX_billing_Master_25",
                    using: "BTREE",
                    fields: [
                        { name: "gpno" },
                    ]
                },
            ]
        });
    }
}
exports.billing_master = billing_master;
//# sourceMappingURL=billing_master.js.map