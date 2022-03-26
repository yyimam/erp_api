import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { payreq_detail, payreq_detailId } from './payreq_detail';

export interface payreq_masterAttributes {
  idno: number;
  EntryNo: number;
  edate?: Date;
  refno?: string;
  remarks?: string;
  loginuserid?: string;
}

export type payreq_masterPk = "idno";
export type payreq_masterId = payreq_master[payreq_masterPk];
export type payreq_masterOptionalAttributes = "edate" | "refno" | "remarks" | "loginuserid";
export type payreq_masterCreationAttributes = Optional<payreq_masterAttributes, payreq_masterOptionalAttributes>;

export class payreq_master extends Model<payreq_masterAttributes, payreq_masterCreationAttributes> implements payreq_masterAttributes {
  idno!: number;
  EntryNo!: number;
  edate?: Date;
  refno?: string;
  remarks?: string;
  loginuserid?: string;

  // payreq_master hasMany payreq_detail via pidno
  payreq_details!: payreq_detail[];
  getPayreq_details!: Sequelize.HasManyGetAssociationsMixin<payreq_detail>;
  setPayreq_details!: Sequelize.HasManySetAssociationsMixin<payreq_detail, payreq_detailId>;
  addPayreq_detail!: Sequelize.HasManyAddAssociationMixin<payreq_detail, payreq_detailId>;
  addPayreq_details!: Sequelize.HasManyAddAssociationsMixin<payreq_detail, payreq_detailId>;
  createPayreq_detail!: Sequelize.HasManyCreateAssociationMixin<payreq_detail>;
  removePayreq_detail!: Sequelize.HasManyRemoveAssociationMixin<payreq_detail, payreq_detailId>;
  removePayreq_details!: Sequelize.HasManyRemoveAssociationsMixin<payreq_detail, payreq_detailId>;
  hasPayreq_detail!: Sequelize.HasManyHasAssociationMixin<payreq_detail, payreq_detailId>;
  hasPayreq_details!: Sequelize.HasManyHasAssociationsMixin<payreq_detail, payreq_detailId>;
  countPayreq_details!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof payreq_master {
    return payreq_master.init({
    idno: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    EntryNo: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    edate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    refno: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    remarks: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    loginuserid: {
      type: DataTypes.STRING(25),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'payreq_master',
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
        name: "IX_PayReq_Master",
        using: "BTREE",
        fields: [
          { name: "edate" },
        ]
      },
      {
        name: "IX_PayReq_Master_1",
        using: "BTREE",
        fields: [
          { name: "EntryNo" },
        ]
      },
      {
        name: "IX_PayReq_Master_2",
        using: "BTREE",
        fields: [
          { name: "loginuserid" },
        ]
      },
      {
        name: "IX_PayReq_Master_3",
        using: "BTREE",
        fields: [
          { name: "refno" },
        ]
      },
    ]
  });
  }
}
