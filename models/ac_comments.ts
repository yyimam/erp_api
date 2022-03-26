import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ac, acId } from './ac';

export interface ac_commentsAttributes {
  idno: number;
  edate?: Date;
  acode?: string;
  user_id?: string;
  sysuser?: string;
  comments?: string;
  ledger_refno?: string;
  ledger_date?: Date;
}

export type ac_commentsPk = "idno";
export type ac_commentsId = ac_comments[ac_commentsPk];
export type ac_commentsOptionalAttributes = "edate" | "acode" | "user_id" | "sysuser" | "comments" | "ledger_refno" | "ledger_date";
export type ac_commentsCreationAttributes = Optional<ac_commentsAttributes, ac_commentsOptionalAttributes>;

export class ac_comments extends Model<ac_commentsAttributes, ac_commentsCreationAttributes> implements ac_commentsAttributes {
  idno!: number;
  edate?: Date;
  acode?: string;
  user_id?: string;
  sysuser?: string;
  comments?: string;
  ledger_refno?: string;
  ledger_date?: Date;

  // ac_comments belongsTo ac via acode
  acode_ac!: ac;
  getAcode_ac!: Sequelize.BelongsToGetAssociationMixin<ac>;
  setAcode_ac!: Sequelize.BelongsToSetAssociationMixin<ac, acId>;
  createAcode_ac!: Sequelize.BelongsToCreateAssociationMixin<ac>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ac_comments {
    return ac_comments.init({
    idno: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    edate: {
      type: DataTypes.DATE,
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
    user_id: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    sysuser: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    comments: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    ledger_refno: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ledger_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ac_comments',
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
        name: "IX_Ac_Comments",
        using: "BTREE",
        fields: [
          { name: "edate" },
        ]
      },
      {
        name: "IX_Ac_Comments_1",
        using: "BTREE",
        fields: [
          { name: "acode" },
        ]
      },
      {
        name: "IX_Ac_Comments_2",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "IX_Ac_Comments_3",
        using: "BTREE",
        fields: [
          { name: "ledger_date" },
        ]
      },
    ]
  });
  }
}
