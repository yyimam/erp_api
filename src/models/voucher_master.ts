import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ac, acId } from './ac';
import type { voucher_detail, voucher_detailId } from './voucher_detail';

export interface voucher_masterAttributes {
  idno: number;
  per?: string;
  vno?: number;
  vtype?: string;
  edate?: Date;
  sysdate?: Date;
  mainacode?: string;
  chequeno?: string;
  chq_date?: Date;
  person?: string;
  posted: number;
  ent_date?: Date;
  clearing_date?: Date;
  payreq_no?: number;
  payreq_cidno?: number;
  itax_per?: number;
  alert_posted?: number;
  doc_attached?: number;
}

export type voucher_masterPk = "idno";
export type voucher_masterId = voucher_master[voucher_masterPk];
export type voucher_masterOptionalAttributes = "per" | "vno" | "vtype" | "edate" | "sysdate" | "mainacode" | "chequeno" | "chq_date" | "person" | "ent_date" | "clearing_date" | "payreq_no" | "payreq_cidno" | "itax_per" | "alert_posted" | "doc_attached";
export type voucher_masterCreationAttributes = Optional<voucher_masterAttributes, voucher_masterOptionalAttributes>;

export class voucher_master extends Model<voucher_masterAttributes, voucher_masterCreationAttributes> implements voucher_masterAttributes {
  idno!: number;
  per?: string;
  vno?: number;
  vtype?: string;
  edate?: Date;
  sysdate?: Date;
  mainacode?: string;
  chequeno?: string;
  chq_date?: Date;
  person?: string;
  posted!: number;
  ent_date?: Date;
  clearing_date?: Date;
  payreq_no?: number;
  payreq_cidno?: number;
  itax_per?: number;
  alert_posted?: number;
  doc_attached?: number;

  // voucher_master belongsTo ac via mainacode
  mainacode_ac!: ac;
  getMainacode_ac!: Sequelize.BelongsToGetAssociationMixin<ac>;
  setMainacode_ac!: Sequelize.BelongsToSetAssociationMixin<ac, acId>;
  createMainacode_ac!: Sequelize.BelongsToCreateAssociationMixin<ac>;
  // voucher_master hasMany voucher_detail via pidno
  voucher_details!: voucher_detail[];
  getVoucher_details!: Sequelize.HasManyGetAssociationsMixin<voucher_detail>;
  setVoucher_details!: Sequelize.HasManySetAssociationsMixin<voucher_detail, voucher_detailId>;
  addVoucher_detail!: Sequelize.HasManyAddAssociationMixin<voucher_detail, voucher_detailId>;
  addVoucher_details!: Sequelize.HasManyAddAssociationsMixin<voucher_detail, voucher_detailId>;
  createVoucher_detail!: Sequelize.HasManyCreateAssociationMixin<voucher_detail>;
  removeVoucher_detail!: Sequelize.HasManyRemoveAssociationMixin<voucher_detail, voucher_detailId>;
  removeVoucher_details!: Sequelize.HasManyRemoveAssociationsMixin<voucher_detail, voucher_detailId>;
  hasVoucher_detail!: Sequelize.HasManyHasAssociationMixin<voucher_detail, voucher_detailId>;
  hasVoucher_details!: Sequelize.HasManyHasAssociationsMixin<voucher_detail, voucher_detailId>;
  countVoucher_details!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof voucher_master {
    return voucher_master.init({
    idno: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    per: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    vno: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    vtype: {
      type: DataTypes.STRING(2),
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
    mainacode: {
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
    person: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    posted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ent_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    clearing_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    payreq_no: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    payreq_cidno: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    itax_per: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    alert_posted: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    doc_attached: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'voucher_master',
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
        name: "IX_Voucher_Master",
        using: "BTREE",
        fields: [
          { name: "chequeno" },
        ]
      },
      {
        name: "IX_Voucher_Master_1",
        using: "BTREE",
        fields: [
          { name: "chq_date" },
        ]
      },
      {
        name: "IX_Voucher_Master_10",
        using: "BTREE",
        fields: [
          { name: "vtype" },
        ]
      },
      {
        name: "IX_Voucher_Master_2",
        using: "BTREE",
        fields: [
          { name: "clearing_date" },
        ]
      },
      {
        name: "IX_Voucher_Master_3",
        using: "BTREE",
        fields: [
          { name: "edate" },
        ]
      },
      {
        name: "IX_Voucher_Master_4",
        using: "BTREE",
        fields: [
          { name: "ent_date" },
        ]
      },
      {
        name: "IX_Voucher_Master_5",
        using: "BTREE",
        fields: [
          { name: "mainacode" },
        ]
      },
      {
        name: "IX_Voucher_Master_6",
        using: "BTREE",
        fields: [
          { name: "payreq_cidno" },
        ]
      },
      {
        name: "IX_Voucher_Master_7",
        using: "BTREE",
        fields: [
          { name: "payreq_no" },
        ]
      },
      {
        name: "IX_Voucher_Master_8",
        using: "BTREE",
        fields: [
          { name: "per" },
        ]
      },
      {
        name: "IX_Voucher_Master_9",
        using: "BTREE",
        fields: [
          { name: "vno" },
        ]
      },
    ]
  });
  }
}
