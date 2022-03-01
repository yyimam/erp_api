import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ac, acId } from './ac';
import type { billing_master, billing_masterId } from './billing_master';
import type { product, productId } from './product';
import type { warehouse_list, warehouse_listId } from './warehouse_list';

export interface billing_detailAttributes {
  idno: number;
  pidno: number;
  estatus?: string;
  itemcode?: string;
  description?: string;
  itemunit?: string;
  amount?: number;
  sed?: number;
  sedamount?: number;
  gst?: number;
  gstamount?: number;
  netamount?: number;
  itemdiscount?: number;
  expiry_date?: Date;
  loose_qty?: number;
  qty_in_pcs?: number;
  pcspctn?: number;
  bonuspcs?: number;
  itemdiscount_P?: number;
  schmper?: number;
  schmamt?: number;
  xschmper?: number;
  xschmamt?: number;
  oschmper?: number;
  oschmamt?: number;
  qty?: number;
  rate?: number;
  Warehouse_Code?: string;
  fitemcode?: string;
  Warehouse_CodeInto?: string;
  rate_change?: number;
  MRP?: number;
  QC_Posted?: number;
  QC_Remarks?: string;
  QC_Post_Date?: Date;
  batch_qty?: number;
  iss_qty?: number;
  req_qty?: number;
  batch_id?: string;
  promotion_sales?: number;
  Batch_Code?: string;
  itaxAmount?: number;
  qty_yards?: number;
  rate_yards?: number;
  amount_yards?: number;
  tailor_ac?: string;
  particular?: string;
  size?: number;
  debit_Ac?: string;
  credit_Ac?: string;
  discountD?: number;
}

export type billing_detailPk = "idno";
export type billing_detailId = billing_detail[billing_detailPk];
export type billing_detailOptionalAttributes = "estatus" | "itemcode" | "description" | "itemunit" | "amount" | "sed" | "sedamount" | "gst" | "gstamount" | "netamount" | "itemdiscount" | "expiry_date" | "loose_qty" | "qty_in_pcs" | "pcspctn" | "bonuspcs" | "itemdiscount_P" | "schmper" | "schmamt" | "xschmper" | "xschmamt" | "oschmper" | "oschmamt" | "qty" | "rate" | "Warehouse_Code" | "fitemcode" | "Warehouse_CodeInto" | "rate_change" | "MRP" | "QC_Posted" | "QC_Remarks" | "QC_Post_Date" | "batch_qty" | "iss_qty" | "req_qty" | "batch_id" | "promotion_sales" | "Batch_Code" | "itaxAmount" | "qty_yards" | "rate_yards" | "amount_yards" | "tailor_ac" | "particular" | "size" | "debit_Ac" | "credit_Ac" | "discountD";
export type billing_detailCreationAttributes = Optional<billing_detailAttributes, billing_detailOptionalAttributes>;

export class billing_detail extends Model<billing_detailAttributes, billing_detailCreationAttributes> implements billing_detailAttributes {
  idno!: number;
  pidno!: number;
  estatus?: string;
  itemcode?: string;
  description?: string;
  itemunit?: string;
  amount?: number;
  sed?: number;
  sedamount?: number;
  gst?: number;
  gstamount?: number;
  netamount?: number;
  itemdiscount?: number;
  expiry_date?: Date;
  loose_qty?: number;
  qty_in_pcs?: number;
  pcspctn?: number;
  bonuspcs?: number;
  itemdiscount_P?: number;
  schmper?: number;
  schmamt?: number;
  xschmper?: number;
  xschmamt?: number;
  oschmper?: number;
  oschmamt?: number;
  qty?: number;
  rate?: number;
  Warehouse_Code?: string;
  fitemcode?: string;
  Warehouse_CodeInto?: string;
  rate_change?: number;
  MRP?: number;
  QC_Posted?: number;
  QC_Remarks?: string;
  QC_Post_Date?: Date;
  batch_qty?: number;
  iss_qty?: number;
  req_qty?: number;
  batch_id?: string;
  promotion_sales?: number;
  Batch_Code?: string;
  itaxAmount?: number;
  qty_yards?: number;
  rate_yards?: number;
  amount_yards?: number;
  tailor_ac?: string;
  particular?: string;
  size?: number;
  debit_Ac?: string;
  credit_Ac?: string;
  discountD?: number;

  // billing_detail belongsTo ac via tailor_ac
  tailor_ac_ac!: ac;
  getTailor_ac_ac!: Sequelize.BelongsToGetAssociationMixin<ac>;
  setTailor_ac_ac!: Sequelize.BelongsToSetAssociationMixin<ac, acId>;
  createTailor_ac_ac!: Sequelize.BelongsToCreateAssociationMixin<ac>;
  // billing_detail belongsTo ac via debit_Ac
  debit_Ac_ac!: ac;
  getDebit_Ac_ac!: Sequelize.BelongsToGetAssociationMixin<ac>;
  setDebit_Ac_ac!: Sequelize.BelongsToSetAssociationMixin<ac, acId>;
  createDebit_Ac_ac!: Sequelize.BelongsToCreateAssociationMixin<ac>;
  // billing_detail belongsTo ac via credit_Ac
  credit_Ac_ac!: ac;
  getCredit_Ac_ac!: Sequelize.BelongsToGetAssociationMixin<ac>;
  setCredit_Ac_ac!: Sequelize.BelongsToSetAssociationMixin<ac, acId>;
  createCredit_Ac_ac!: Sequelize.BelongsToCreateAssociationMixin<ac>;
  // billing_detail belongsTo billing_master via pidno
  pidno_billing_master!: billing_master;
  getPidno_billing_master!: Sequelize.BelongsToGetAssociationMixin<billing_master>;
  setPidno_billing_master!: Sequelize.BelongsToSetAssociationMixin<billing_master, billing_masterId>;
  createPidno_billing_master!: Sequelize.BelongsToCreateAssociationMixin<billing_master>;
  // billing_detail belongsTo product via itemcode
  itemcode_product!: product;
  getItemcode_product!: Sequelize.BelongsToGetAssociationMixin<product>;
  setItemcode_product!: Sequelize.BelongsToSetAssociationMixin<product, productId>;
  createItemcode_product!: Sequelize.BelongsToCreateAssociationMixin<product>;
  // billing_detail belongsTo product via fitemcode
  fitemcode_product!: product;
  getFitemcode_product!: Sequelize.BelongsToGetAssociationMixin<product>;
  setFitemcode_product!: Sequelize.BelongsToSetAssociationMixin<product, productId>;
  createFitemcode_product!: Sequelize.BelongsToCreateAssociationMixin<product>;
  // billing_detail belongsTo warehouse_list via Warehouse_Code
  Warehouse_Code_warehouse_list!: warehouse_list;
  getWarehouse_Code_warehouse_list!: Sequelize.BelongsToGetAssociationMixin<warehouse_list>;
  setWarehouse_Code_warehouse_list!: Sequelize.BelongsToSetAssociationMixin<warehouse_list, warehouse_listId>;
  createWarehouse_Code_warehouse_list!: Sequelize.BelongsToCreateAssociationMixin<warehouse_list>;
  // billing_detail belongsTo warehouse_list via Warehouse_CodeInto
  Warehouse_CodeInto_warehouse_list!: warehouse_list;
  getWarehouse_CodeInto_warehouse_list!: Sequelize.BelongsToGetAssociationMixin<warehouse_list>;
  setWarehouse_CodeInto_warehouse_list!: Sequelize.BelongsToSetAssociationMixin<warehouse_list, warehouse_listId>;
  createWarehouse_CodeInto_warehouse_list!: Sequelize.BelongsToCreateAssociationMixin<warehouse_list>;

  static initModel(sequelize: Sequelize.Sequelize): typeof billing_detail {
    return billing_detail.init({
    idno: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pidno: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'billing_master',
        key: 'idno'
      }
    },
    estatus: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    itemcode: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      references: {
        model: 'product',
        key: 'code'
      }
    },
    description: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    itemunit: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    amount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    sed: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    sedamount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    gst: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    gstamount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    netamount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    itemdiscount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    expiry_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    loose_qty: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    qty_in_pcs: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    pcspctn: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    },
    bonuspcs: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    },
    itemdiscount_P: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    schmper: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    schmamt: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    xschmper: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    xschmamt: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    oschmper: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    oschmamt: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    qty: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    rate: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    Warehouse_Code: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      references: {
        model: 'warehouse_list',
        key: 'code'
      }
    },
    fitemcode: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      references: {
        model: 'product',
        key: 'code'
      }
    },
    Warehouse_CodeInto: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      references: {
        model: 'warehouse_list',
        key: 'code'
      }
    },
    rate_change: {
      type: DataTypes.DECIMAL(14,4),
      allowNull: true
    },
    MRP: {
      type: DataTypes.DECIMAL(14,4),
      allowNull: true
    },
    QC_Posted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    QC_Remarks: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    QC_Post_Date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    batch_qty: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    iss_qty: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    req_qty: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    batch_id: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    promotion_sales: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Batch_Code: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    itaxAmount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    qty_yards: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    rate_yards: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    amount_yards: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    tailor_ac: {
      type: DataTypes.CHAR(24),
      allowNull: true,
      references: {
        model: 'ac',
        key: 'acode'
      }
    },
    particular: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    size: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    debit_Ac: {
      type: DataTypes.CHAR(24),
      allowNull: true,
      references: {
        model: 'ac',
        key: 'acode'
      }
    },
    credit_Ac: {
      type: DataTypes.CHAR(24),
      allowNull: true,
      references: {
        model: 'ac',
        key: 'acode'
      }
    },
    discountD: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'billing_detail',
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
        name: "IX_billing_Detail",
        using: "BTREE",
        fields: [
          { name: "batch_id" },
        ]
      },
      {
        name: "IX_billing_Detail_1",
        using: "BTREE",
        fields: [
          { name: "fitemcode" },
        ]
      },
      {
        name: "IX_billing_Detail_2",
        using: "BTREE",
        fields: [
          { name: "itemcode" },
        ]
      },
      {
        name: "IX_billing_Detail_3",
        using: "BTREE",
        fields: [
          { name: "pidno" },
        ]
      },
      {
        name: "IX_billing_Detail_4",
        using: "BTREE",
        fields: [
          { name: "Warehouse_Code" },
        ]
      },
      {
        name: "IX_billing_Detail_5",
        using: "BTREE",
        fields: [
          { name: "Warehouse_CodeInto" },
        ]
      },
      {
        name: "FK_billing_detail_tailor_ac_ac",
        using: "BTREE",
        fields: [
          { name: "tailor_ac" },
        ]
      },
      {
        name: "FK_Billing_Detail_debit_Ac_ac",
        using: "BTREE",
        fields: [
          { name: "debit_Ac" },
        ]
      },
      {
        name: "FK_Billing_Detail_credit_Ac_ac",
        using: "BTREE",
        fields: [
          { name: "credit_Ac" },
        ]
      },
    ]
  });
  }
}
