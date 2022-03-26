import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ac, acId } from './ac';
import type { order_detail, order_detailId } from './order_detail';
import type { warehouse_list, warehouse_listId } from './warehouse_list';

export interface order_masterAttributes {
  idno: number;
  EntryNo?: number;
  RefNo?: string;
  edate?: Date;
  sysdate?: Date;
  party_ac?: string;
  estatus?: string;
  remarks?: string;
  gst?: number;
  gstAmount?: number;
  sed?: number;
  sedAmount?: number;
  disc_p?: number;
  discount?: number;
  grossamount?: number;
  netamount?: number;
  Warehouse_Code?: string;
  Transporter?: string;
  DN_Address?: string;
  Circular_No?: number;
  Invoice_No?: string;
  Order_No?: string;
  Vendor_No?: string;
  Shop?: string;
  ent_date?: Date;
  itemdescription?: string;
  orderclosed?: number;
  posted?: number;
  ledgerbal?: number;
  overdue?: number;
  delivery_date?: Date;
  terms?: string;
  DVC_Per?: number;
  DVC_Amount?: number;
  DVC_Remarks?: string;
  dc_no?: number;
  alert_posted?: number;
  size_by?: string;
  fitted_by?: string;
  salesman?: string;
  doc_attached?: number;
  customer_name?: string;
  customer_address?: string;
  contact_no1?: string;
  contact_no2?: string;
}

export type order_masterPk = "idno";
export type order_masterId = order_master[order_masterPk];
export type order_masterOptionalAttributes = "EntryNo" | "RefNo" | "edate" | "sysdate" | "party_ac" | "estatus" | "remarks" | "gst" | "gstAmount" | "sed" | "sedAmount" | "disc_p" | "discount" | "grossamount" | "netamount" | "Warehouse_Code" | "Transporter" | "DN_Address" | "Circular_No" | "Invoice_No" | "Order_No" | "Vendor_No" | "Shop" | "ent_date" | "itemdescription" | "orderclosed" | "posted" | "ledgerbal" | "overdue" | "delivery_date" | "terms" | "DVC_Per" | "DVC_Amount" | "DVC_Remarks" | "dc_no" | "alert_posted" | "size_by" | "fitted_by" | "salesman" | "doc_attached" | "customer_name" | "customer_address" | "contact_no1" | "contact_no2";
export type order_masterCreationAttributes = Optional<order_masterAttributes, order_masterOptionalAttributes>;

export class order_master extends Model<order_masterAttributes, order_masterCreationAttributes> implements order_masterAttributes {
  idno!: number;
  EntryNo?: number;
  RefNo?: string;
  edate?: Date;
  sysdate?: Date;
  party_ac?: string;
  estatus?: string;
  remarks?: string;
  gst?: number;
  gstAmount?: number;
  sed?: number;
  sedAmount?: number;
  disc_p?: number;
  discount?: number;
  grossamount?: number;
  netamount?: number;
  Warehouse_Code?: string;
  Transporter?: string;
  DN_Address?: string;
  Circular_No?: number;
  Invoice_No?: string;
  Order_No?: string;
  Vendor_No?: string;
  Shop?: string;
  ent_date?: Date;
  itemdescription?: string;
  orderclosed?: number;
  posted?: number;
  ledgerbal?: number;
  overdue?: number;
  delivery_date?: Date;
  terms?: string;
  DVC_Per?: number;
  DVC_Amount?: number;
  DVC_Remarks?: string;
  dc_no?: number;
  alert_posted?: number;
  size_by?: string;
  fitted_by?: string;
  salesman?: string;
  doc_attached?: number;
  customer_name?: string;
  customer_address?: string;
  contact_no1?: string;
  contact_no2?: string;

  // order_master belongsTo ac via party_ac
  party_ac_ac!: ac;
  getParty_ac_ac!: Sequelize.BelongsToGetAssociationMixin<ac>;
  setParty_ac_ac!: Sequelize.BelongsToSetAssociationMixin<ac, acId>;
  createParty_ac_ac!: Sequelize.BelongsToCreateAssociationMixin<ac>;
  // order_master belongsTo ac via Transporter
  Transporter_ac!: ac;
  getTransporter_ac!: Sequelize.BelongsToGetAssociationMixin<ac>;
  setTransporter_ac!: Sequelize.BelongsToSetAssociationMixin<ac, acId>;
  createTransporter_ac!: Sequelize.BelongsToCreateAssociationMixin<ac>;
  // order_master belongsTo ac via salesman
  salesman_ac!: ac;
  getSalesman_ac!: Sequelize.BelongsToGetAssociationMixin<ac>;
  setSalesman_ac!: Sequelize.BelongsToSetAssociationMixin<ac, acId>;
  createSalesman_ac!: Sequelize.BelongsToCreateAssociationMixin<ac>;
  // order_master hasMany order_detail via pidno
  order_details!: order_detail[];
  getOrder_details!: Sequelize.HasManyGetAssociationsMixin<order_detail>;
  setOrder_details!: Sequelize.HasManySetAssociationsMixin<order_detail, order_detailId>;
  addOrder_detail!: Sequelize.HasManyAddAssociationMixin<order_detail, order_detailId>;
  addOrder_details!: Sequelize.HasManyAddAssociationsMixin<order_detail, order_detailId>;
  createOrder_detail!: Sequelize.HasManyCreateAssociationMixin<order_detail>;
  removeOrder_detail!: Sequelize.HasManyRemoveAssociationMixin<order_detail, order_detailId>;
  removeOrder_details!: Sequelize.HasManyRemoveAssociationsMixin<order_detail, order_detailId>;
  hasOrder_detail!: Sequelize.HasManyHasAssociationMixin<order_detail, order_detailId>;
  hasOrder_details!: Sequelize.HasManyHasAssociationsMixin<order_detail, order_detailId>;
  countOrder_details!: Sequelize.HasManyCountAssociationsMixin;
  // order_master belongsTo warehouse_list via Warehouse_Code
  Warehouse_Code_warehouse_list!: warehouse_list;
  getWarehouse_Code_warehouse_list!: Sequelize.BelongsToGetAssociationMixin<warehouse_list>;
  setWarehouse_Code_warehouse_list!: Sequelize.BelongsToSetAssociationMixin<warehouse_list, warehouse_listId>;
  createWarehouse_Code_warehouse_list!: Sequelize.BelongsToCreateAssociationMixin<warehouse_list>;

  static initModel(sequelize: Sequelize.Sequelize): typeof order_master {
    return order_master.init({
    idno: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    EntryNo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    RefNo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    edate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sysdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    party_ac: {
      type: DataTypes.CHAR(24),
      allowNull: true,
      references: {
        model: 'ac',
        key: 'acode'
      }
    },
    estatus: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    remarks: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    gst: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    gstAmount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    sed: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    sedAmount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    disc_p: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    discount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    grossamount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    netamount: {
      type: DataTypes.DECIMAL(18,2),
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
    Transporter: {
      type: DataTypes.CHAR(24),
      allowNull: true,
      references: {
        model: 'ac',
        key: 'acode'
      }
    },
    DN_Address: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    Circular_No: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Invoice_No: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Order_No: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Vendor_No: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Shop: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ent_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    itemdescription: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    orderclosed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    posted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ledgerbal: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    overdue: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    delivery_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    terms: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DVC_Per: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: true
    },
    DVC_Amount: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: true
    },
    DVC_Remarks: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dc_no: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    alert_posted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    size_by: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fitted_by: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    salesman: {
      type: DataTypes.CHAR(24),
      allowNull: true,
      references: {
        model: 'ac',
        key: 'acode'
      }
    },
    doc_attached: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    customer_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    customer_address: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    contact_no1: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    contact_no2: {
      type: DataTypes.STRING(20),
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
