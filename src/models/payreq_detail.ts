import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ac, acId } from './ac';
import type { payreq_master, payreq_masterId } from './payreq_master';

export interface payreq_detailAttributes {
  idno: number;
  pidno: number;
  party?: string;
  description?: string;
  amount?: number;
  chq_Date?: Date;
}

export type payreq_detailPk = "idno";
export type payreq_detailId = payreq_detail[payreq_detailPk];
export type payreq_detailOptionalAttributes = "party" | "description" | "amount" | "chq_Date";
export type payreq_detailCreationAttributes = Optional<payreq_detailAttributes, payreq_detailOptionalAttributes>;

export class payreq_detail extends Model<payreq_detailAttributes, payreq_detailCreationAttributes> implements payreq_detailAttributes {
  idno!: number;
  pidno!: number;
  party?: string;
  description?: string;
  amount?: number;
  chq_Date?: Date;

  // payreq_detail belongsTo ac via party
  party_ac!: ac;
  getParty_ac!: Sequelize.BelongsToGetAssociationMixin<ac>;
  setParty_ac!: Sequelize.BelongsToSetAssociationMixin<ac, acId>;
  createParty_ac!: Sequelize.BelongsToCreateAssociationMixin<ac>;
  // payreq_detail belongsTo payreq_master via pidno
  pidno_payreq_master!: payreq_master;
  getPidno_payreq_master!: Sequelize.BelongsToGetAssociationMixin<payreq_master>;
  setPidno_payreq_master!: Sequelize.BelongsToSetAssociationMixin<payreq_master, payreq_masterId>;
  createPidno_payreq_master!: Sequelize.BelongsToCreateAssociationMixin<payreq_master>;

  static initModel(sequelize: Sequelize.Sequelize): typeof payreq_detail {
    return payreq_detail.init({
    idno: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pidno: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'payreq_master',
        key: 'idno'
      }
    },
    party: {
      type: DataTypes.CHAR(24),
      allowNull: true,
      references: {
        model: 'ac',
        key: 'acode'
      }
    },
    description: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    chq_Date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'payreq_detail',
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
        name: "IX_PayReq_Detail",
        using: "BTREE",
        fields: [
          { name: "chq_Date" },
        ]
      },
      {
        name: "IX_PayReq_Detail_1",
        using: "BTREE",
        fields: [
          { name: "party" },
        ]
      },
      {
        name: "IX_PayReq_Detail_2",
        using: "BTREE",
        fields: [
          { name: "pidno" },
        ]
      },
    ]
  });
  }
}
