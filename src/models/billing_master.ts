import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ac, acId } from './ac';
import type { billing_detail, billing_detailId } from './billing_detail';
import type { product, productId } from './product';
import type { return_type_list, return_type_listId } from './return_type_list';
import type { warehouse_list, warehouse_listId } from './warehouse_list';

export interface billing_masterAttributes {
  idno: number;
  EntryNo?: number;
  billno?: string;
  edate?: Date;
  sysdate?: Date;
  party_ac?: string;
  dr_cr_ac?: string;
  dcno?: string;
  estatus?: string;
  order_no?: number;
  remarks?: string;
  gst?: number;
  gstAmount?: number;
  gstinv?: string;
  gst_ac?: string;
  sed?: number;
  sedAmount?: number;
  sed_ac?: string;
  disc_p?: number;
  discount?: number;
  grossamount?: number;
  netamount?: number;
  etime?: string;
  terms?: string;
  Warehouse_Code?: string;
  doentryno?: number;
  ent_date?: Date;
  Credit_Days?: number;
  Circular_No?: number;
  Vehicle_No?: string;
  duedate?: Date;
  Vendor_No?: string;
  r_No?: string;
  rvno?: string;
  rvdate?: Date;
  Shop?: string;
  sol_com?: number;
  sol_comA?: number;
  osb_com?: number;
  osb_comA?: number;
  freight?: number;
  Transporter?: string;
  porder_no?: string;
  return_type?: string;
  oldcirno?: string;
  dincentp?: number;
  dincentamt?: number;
  dincentac?: string;
  grn_no?: number;
  dc_no?: number;
  posted?: number;
  biltyno?: string;
  mir_No?: number;
  gor_No?: string;
  container_no?: string;
  seal_no?: string;
  period?: string;
  bilty_filename?: string;
  itemdescription?: string;
  grn_closed?: number;
  fitem_code?: string;
  batch_qty?: number;
  Recipe_No?: number;
  batch_id?: string;
  batch_id_no?: number;
  mat_type?: string;
  dc_no_SR?: number;
  S_dc_no?: number;
  transporter_name?: string;
  alert_posted?: number;
  file_name?: string;
  gpno?: string;
  doc_attached?: number;
  post_date?: Date;
}

export type billing_masterPk = "idno";
export type billing_masterId = billing_master[billing_masterPk];
export type billing_masterOptionalAttributes = "EntryNo" | "billno" | "edate" | "sysdate" | "party_ac" | "dr_cr_ac" | "dcno" | "estatus" | "order_no" | "remarks" | "gst" | "gstAmount" | "gstinv" | "gst_ac" | "sed" | "sedAmount" | "sed_ac" | "disc_p" | "discount" | "grossamount" | "netamount" | "etime" | "terms" | "Warehouse_Code" | "doentryno" | "ent_date" | "Credit_Days" | "Circular_No" | "Vehicle_No" | "duedate" | "Vendor_No" | "r_No" | "rvno" | "rvdate" | "Shop" | "sol_com" | "sol_comA" | "osb_com" | "osb_comA" | "freight" | "Transporter" | "porder_no" | "return_type" | "oldcirno" | "dincentp" | "dincentamt" | "dincentac" | "grn_no" | "dc_no" | "posted" | "biltyno" | "mir_No" | "gor_No" | "container_no" | "seal_no" | "period" | "bilty_filename" | "itemdescription" | "grn_closed" | "fitem_code" | "batch_qty" | "Recipe_No" | "batch_id" | "batch_id_no" | "mat_type" | "dc_no_SR" | "S_dc_no" | "transporter_name" | "alert_posted" | "file_name" | "gpno" | "doc_attached" | "post_date";
export type billing_masterCreationAttributes = Optional<billing_masterAttributes, billing_masterOptionalAttributes>;

export class billing_master extends Model<billing_masterAttributes, billing_masterCreationAttributes> implements billing_masterAttributes {
  idno!: number;
  EntryNo?: number;
  billno?: string;
  edate?: Date;
  sysdate?: Date;
  party_ac?: string;
  dr_cr_ac?: string;
  dcno?: string;
  estatus?: string;
  order_no?: number;
  remarks?: string;
  gst?: number;
  gstAmount?: number;
  gstinv?: string;
  gst_ac?: string;
  sed?: number;
  sedAmount?: number;
  sed_ac?: string;
  disc_p?: number;
  discount?: number;
  grossamount?: number;
  netamount?: number;
  etime?: string;
  terms?: string;
  Warehouse_Code?: string;
  doentryno?: number;
  ent_date?: Date;
  Credit_Days?: number;
  Circular_No?: number;
  Vehicle_No?: string;
  duedate?: Date;
  Vendor_No?: string;
  r_No?: string;
  rvno?: string;
  rvdate?: Date;
  Shop?: string;
  sol_com?: number;
  sol_comA?: number;
  osb_com?: number;
  osb_comA?: number;
  freight?: number;
  Transporter?: string;
  porder_no?: string;
  return_type?: string;
  oldcirno?: string;
  dincentp?: number;
  dincentamt?: number;
  dincentac?: string;
  grn_no?: number;
  dc_no?: number;
  posted?: number;
  biltyno?: string;
  mir_No?: number;
  gor_No?: string;
  container_no?: string;
  seal_no?: string;
  period?: string;
  bilty_filename?: string;
  itemdescription?: string;
  grn_closed?: number;
  fitem_code?: string;
  batch_qty?: number;
  Recipe_No?: number;
  batch_id?: string;
  batch_id_no?: number;
  mat_type?: string;
  dc_no_SR?: number;
  S_dc_no?: number;
  transporter_name?: string;
  alert_posted?: number;
  file_name?: string;
  gpno?: string;
  doc_attached?: number;
  post_date?: Date;

  // billing_master belongsTo ac via party_ac
  party_ac_ac!: ac;
  getParty_ac_ac!: Sequelize.BelongsToGetAssociationMixin<ac>;
  setParty_ac_ac!: Sequelize.BelongsToSetAssociationMixin<ac, acId>;
  createParty_ac_ac!: Sequelize.BelongsToCreateAssociationMixin<ac>;
  // billing_master belongsTo ac via dr_cr_ac
  dr_cr_ac_ac!: ac;
  getDr_cr_ac_ac!: Sequelize.BelongsToGetAssociationMixin<ac>;
  setDr_cr_ac_ac!: Sequelize.BelongsToSetAssociationMixin<ac, acId>;
  createDr_cr_ac_ac!: Sequelize.BelongsToCreateAssociationMixin<ac>;
  // billing_master belongsTo ac via gst_ac
  gst_ac_ac!: ac;
  getGst_ac_ac!: Sequelize.BelongsToGetAssociationMixin<ac>;
  setGst_ac_ac!: Sequelize.BelongsToSetAssociationMixin<ac, acId>;
  createGst_ac_ac!: Sequelize.BelongsToCreateAssociationMixin<ac>;
  // billing_master belongsTo ac via sed_ac
  sed_ac_ac!: ac;
  getSed_ac_ac!: Sequelize.BelongsToGetAssociationMixin<ac>;
  setSed_ac_ac!: Sequelize.BelongsToSetAssociationMixin<ac, acId>;
  createSed_ac_ac!: Sequelize.BelongsToCreateAssociationMixin<ac>;
  // billing_master belongsTo ac via Transporter
  Transporter_ac!: ac;
  getTransporter_ac!: Sequelize.BelongsToGetAssociationMixin<ac>;
  setTransporter_ac!: Sequelize.BelongsToSetAssociationMixin<ac, acId>;
  createTransporter_ac!: Sequelize.BelongsToCreateAssociationMixin<ac>;
  // billing_master belongsTo ac via dincentac
  dincentac_ac!: ac;
  getDincentac_ac!: Sequelize.BelongsToGetAssociationMixin<ac>;
  setDincentac_ac!: Sequelize.BelongsToSetAssociationMixin<ac, acId>;
  createDincentac_ac!: Sequelize.BelongsToCreateAssociationMixin<ac>;
  // billing_master hasMany billing_detail via pidno
  billing_details!: billing_detail[];
  getBilling_details!: Sequelize.HasManyGetAssociationsMixin<billing_detail>;
  setBilling_details!: Sequelize.HasManySetAssociationsMixin<billing_detail, billing_detailId>;
  addBilling_detail!: Sequelize.HasManyAddAssociationMixin<billing_detail, billing_detailId>;
  addBilling_details!: Sequelize.HasManyAddAssociationsMixin<billing_detail, billing_detailId>;
  createBilling_detail!: Sequelize.HasManyCreateAssociationMixin<billing_detail>;
  removeBilling_detail!: Sequelize.HasManyRemoveAssociationMixin<billing_detail, billing_detailId>;
  removeBilling_details!: Sequelize.HasManyRemoveAssociationsMixin<billing_detail, billing_detailId>;
  hasBilling_detail!: Sequelize.HasManyHasAssociationMixin<billing_detail, billing_detailId>;
  hasBilling_details!: Sequelize.HasManyHasAssociationsMixin<billing_detail, billing_detailId>;
  countBilling_details!: Sequelize.HasManyCountAssociationsMixin;
  // billing_master belongsTo product via fitem_code
  fitem_code_product!: product;
  getFitem_code_product!: Sequelize.BelongsToGetAssociationMixin<product>;
  setFitem_code_product!: Sequelize.BelongsToSetAssociationMixin<product, productId>;
  createFitem_code_product!: Sequelize.BelongsToCreateAssociationMixin<product>;
  // billing_master belongsTo return_type_list via return_type
  return_type_return_type_list!: return_type_list;
  getReturn_type_return_type_list!: Sequelize.BelongsToGetAssociationMixin<return_type_list>;
  setReturn_type_return_type_list!: Sequelize.BelongsToSetAssociationMixin<return_type_list, return_type_listId>;
  createReturn_type_return_type_list!: Sequelize.BelongsToCreateAssociationMixin<return_type_list>;
  // billing_master belongsTo warehouse_list via Warehouse_Code
  Warehouse_Code_warehouse_list!: warehouse_list;
  getWarehouse_Code_warehouse_list!: Sequelize.BelongsToGetAssociationMixin<warehouse_list>;
  setWarehouse_Code_warehouse_list!: Sequelize.BelongsToSetAssociationMixin<warehouse_list, warehouse_listId>;
  createWarehouse_Code_warehouse_list!: Sequelize.BelongsToCreateAssociationMixin<warehouse_list>;

  static initModel(sequelize: Sequelize.Sequelize): typeof billing_master {
    return billing_master.init({
    idno: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    EntryNo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    billno: {
      type: DataTypes.STRING(10),
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
    dr_cr_ac: {
      type: DataTypes.CHAR(24),
      allowNull: true,
      references: {
        model: 'ac',
        key: 'acode'
      }
    },
    dcno: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    estatus: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    order_no: {
      type: DataTypes.BIGINT,
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
    gstinv: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    gst_ac: {
      type: DataTypes.CHAR(24),
      allowNull: true,
      references: {
        model: 'ac',
        key: 'acode'
      }
    },
    sed: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    sedAmount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    sed_ac: {
      type: DataTypes.CHAR(24),
      allowNull: true,
      references: {
        model: 'ac',
        key: 'acode'
      }
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
    etime: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    terms: {
      type: DataTypes.STRING(10),
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
    doentryno: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ent_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Credit_Days: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    Circular_No: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Vehicle_No: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    duedate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Vendor_No: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    r_No: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    rvno: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    rvdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Shop: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    sol_com: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    sol_comA: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    osb_com: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    osb_comA: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    freight: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    Transporter: {
      type: DataTypes.CHAR(24),
      allowNull: true,
      references: {
        model: 'ac',
        key: 'acode'
      }
    },
    porder_no: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    return_type: {
      type: DataTypes.CHAR(4),
      allowNull: true,
      references: {
        model: 'return_type_list',
        key: 'code'
      }
    },
    oldcirno: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    dincentp: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    dincentamt: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    dincentac: {
      type: DataTypes.CHAR(24),
      allowNull: true,
      references: {
        model: 'ac',
        key: 'acode'
      }
    },
    grn_no: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    dc_no: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    posted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    biltyno: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    mir_No: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    gor_No: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    container_no: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    seal_no: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    period: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    bilty_filename: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    itemdescription: {
      type: DataTypes.STRING(8000),
      allowNull: true
    },
    grn_closed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    fitem_code: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      references: {
        model: 'product',
        key: 'code'
      }
    },
    batch_qty: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Recipe_No: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    batch_id: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    batch_id_no: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    mat_type: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    dc_no_SR: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    S_dc_no: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    transporter_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    alert_posted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    file_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gpno: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    doc_attached: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    post_date: {
      type: DataTypes.DATE,
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
