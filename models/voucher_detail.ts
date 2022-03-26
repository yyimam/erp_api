import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ac, acId } from './ac';
import type { product, productId } from './product';
import type { voucher_master, voucher_masterId } from './voucher_master';

export interface voucher_detailAttributes {
  idno: number;
  pidno: number;
  vtype?: string;
  acode?: string;
  descrip?: string;
  debit?: number;
  credit?: number;
  billno?: string;
  product?: string;
  qty?: number;
  comtype?: string;
  chequeno?: string;
  chq_date?: Date;
  itax_acode?: string;
  itax_Amt?: number;
  itax_inv?: string;
  chalan_rec?: number;
  gst_inv?: string;
  gstval?: number;
  gst?: number;
  doc_attached?: number;
  voucherno?: string;
}

export type voucher_detailPk = "idno";
export type voucher_detailId = voucher_detail[voucher_detailPk];
export type voucher_detailOptionalAttributes = "vtype" | "acode" | "descrip" | "debit" | "credit" | "billno" | "product" | "qty" | "comtype" | "chequeno" | "chq_date" | "itax_acode" | "itax_Amt" | "itax_inv" | "chalan_rec" | "gst_inv" | "gstval" | "gst" | "doc_attached" | "voucherno";
export type voucher_detailCreationAttributes = Optional<voucher_detailAttributes, voucher_detailOptionalAttributes>;

export class voucher_detail extends Model<voucher_detailAttributes, voucher_detailCreationAttributes> implements voucher_detailAttributes {
  idno!: number;
  pidno!: number;
  vtype?: string;
  acode?: string;
  descrip?: string;
  debit?: number;
  credit?: number;
  billno?: string;
  product?: string;
  qty?: number;
  comtype?: string;
  chequeno?: string;
  chq_date?: Date;
  itax_acode?: string;
  itax_Amt?: number;
  itax_inv?: string;
  chalan_rec?: number;
  gst_inv?: string;
  gstval?: number;
  gst?: number;
  doc_attached?: number;
  voucherno?: string;

  // voucher_detail belongsTo ac via acode
  acode_ac!: ac;
  getAcode_ac!: Sequelize.BelongsToGetAssociationMixin<ac>;
  setAcode_ac!: Sequelize.BelongsToSetAssociationMixin<ac, acId>;
  createAcode_ac!: Sequelize.BelongsToCreateAssociationMixin<ac>;
  // voucher_detail belongsTo ac via comtype
  comtype_ac!: ac;
  getComtype_ac!: Sequelize.BelongsToGetAssociationMixin<ac>;
  setComtype_ac!: Sequelize.BelongsToSetAssociationMixin<ac, acId>;
  createComtype_ac!: Sequelize.BelongsToCreateAssociationMixin<ac>;
  // voucher_detail belongsTo ac via itax_acode
  itax_acode_ac!: ac;
  getItax_acode_ac!: Sequelize.BelongsToGetAssociationMixin<ac>;
  setItax_acode_ac!: Sequelize.BelongsToSetAssociationMixin<ac, acId>;
  createItax_acode_ac!: Sequelize.BelongsToCreateAssociationMixin<ac>;
  // voucher_detail belongsTo product via product
  product_product!: product;
  getProduct_product!: Sequelize.BelongsToGetAssociationMixin<product>;
  setProduct_product!: Sequelize.BelongsToSetAssociationMixin<product, productId>;
  createProduct_product!: Sequelize.BelongsToCreateAssociationMixin<product>;
  // voucher_detail belongsTo voucher_master via pidno
  pidno_voucher_master!: voucher_master;
  getPidno_voucher_master!: Sequelize.BelongsToGetAssociationMixin<voucher_master>;
  setPidno_voucher_master!: Sequelize.BelongsToSetAssociationMixin<voucher_master, voucher_masterId>;
  createPidno_voucher_master!: Sequelize.BelongsToCreateAssociationMixin<voucher_master>;

  static initModel(sequelize: Sequelize.Sequelize): typeof voucher_detail {
    return voucher_detail.init({
    idno: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pidno: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'voucher_master',
        key: 'idno'
      }
    },
    vtype: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    acode: {
      type: DataTypes.CHAR(24),
      allowNull: true,
      references: {
        model: 'ac',
        key: 'acode'
      }
    },
    descrip: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    debit: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    credit: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    billno: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    product: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      references: {
        model: 'product',
        key: 'code'
      }
    },
    qty: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    comtype: {
      type: DataTypes.CHAR(24),
      allowNull: true,
      references: {
        model: 'ac',
        key: 'acode'
      }
    },
    chequeno: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    chq_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    itax_acode: {
      type: DataTypes.CHAR(24),
      allowNull: true,
      references: {
        model: 'ac',
        key: 'acode'
      }
    },
    itax_Amt: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    itax_inv: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    chalan_rec: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    gst_inv: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    gstval: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    gst: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    doc_attached: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    voucherno: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'voucher_detail',
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
        name: "IX_Voucher_Detail",
        using: "BTREE",
        fields: [
          { name: "acode" },
        ]
      },
      {
        name: "IX_Voucher_Detail_1",
        using: "BTREE",
        fields: [
          { name: "billno" },
        ]
      },
      {
        name: "IX_Voucher_Detail_2",
        using: "BTREE",
        fields: [
          { name: "chequeno" },
        ]
      },
      {
        name: "IX_Voucher_Detail_3",
        using: "BTREE",
        fields: [
          { name: "chq_date" },
        ]
      },
      {
        name: "IX_Voucher_Detail_4",
        using: "BTREE",
        fields: [
          { name: "comtype" },
        ]
      },
      {
        name: "IX_Voucher_Detail_5",
        using: "BTREE",
        fields: [
          { name: "pidno" },
        ]
      },
      {
        name: "FK_Voucher_Detail_product",
        using: "BTREE",
        fields: [
          { name: "product" },
        ]
      },
      {
        name: "FK_Voucher_Detail_itax_acode_Ac",
        using: "BTREE",
        fields: [
          { name: "itax_acode" },
        ]
      },
    ]
  });
  }
}
