import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ac, acId } from './ac';
import type { fin_ac, fin_acId } from './fin_ac';
import type { fin_notes_master, fin_notes_masterId } from './fin_notes_master';

export interface fin_plAttributes {
  idno: number;
  sno?: number;
  descrip?: string;
  note_no?: number;
  fin_acode?: string;
  ac_acode?: string;
  calc1?: string;
  calc2?: string;
  lines?: string;
  sysdate?: Date;
}

export type fin_plPk = "idno";
export type fin_plId = fin_pl[fin_plPk];
export type fin_plOptionalAttributes = "sno" | "descrip" | "note_no" | "fin_acode" | "ac_acode" | "calc1" | "calc2" | "lines" | "sysdate";
export type fin_plCreationAttributes = Optional<fin_plAttributes, fin_plOptionalAttributes>;

export class fin_pl extends Model<fin_plAttributes, fin_plCreationAttributes> implements fin_plAttributes {
  idno!: number;
  sno?: number;
  descrip?: string;
  note_no?: number;
  fin_acode?: string;
  ac_acode?: string;
  calc1?: string;
  calc2?: string;
  lines?: string;
  sysdate?: Date;

  // fin_pl belongsTo ac via ac_acode
  ac_acode_ac!: ac;
  getAc_acode_ac!: Sequelize.BelongsToGetAssociationMixin<ac>;
  setAc_acode_ac!: Sequelize.BelongsToSetAssociationMixin<ac, acId>;
  createAc_acode_ac!: Sequelize.BelongsToCreateAssociationMixin<ac>;
  // fin_pl belongsTo fin_ac via fin_acode
  fin_acode_fin_ac!: fin_ac;
  getFin_acode_fin_ac!: Sequelize.BelongsToGetAssociationMixin<fin_ac>;
  setFin_acode_fin_ac!: Sequelize.BelongsToSetAssociationMixin<fin_ac, fin_acId>;
  createFin_acode_fin_ac!: Sequelize.BelongsToCreateAssociationMixin<fin_ac>;
  // fin_pl belongsTo fin_notes_master via note_no
  note_no_fin_notes_master!: fin_notes_master;
  getNote_no_fin_notes_master!: Sequelize.BelongsToGetAssociationMixin<fin_notes_master>;
  setNote_no_fin_notes_master!: Sequelize.BelongsToSetAssociationMixin<fin_notes_master, fin_notes_masterId>;
  createNote_no_fin_notes_master!: Sequelize.BelongsToCreateAssociationMixin<fin_notes_master>;

  static initModel(sequelize: Sequelize.Sequelize): typeof fin_pl {
    return fin_pl.init({
    idno: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sno: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    descrip: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    note_no: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'fin_notes_master',
        key: 'note_no'
      }
    },
    fin_acode: {
      type: DataTypes.CHAR(24),
      allowNull: true,
      references: {
        model: 'fin_ac',
        key: 'acode'
      }
    },
    ac_acode: {
      type: DataTypes.CHAR(24),
      allowNull: true,
      references: {
        model: 'ac',
        key: 'acode'
      }
    },
    calc1: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    calc2: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    lines: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    sysdate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'fin_pl',
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
        name: "FK_fin_pl_ac",
        using: "BTREE",
        fields: [
          { name: "ac_acode" },
        ]
      },
      {
        name: "FK_fin_pl_fin_ac",
        using: "BTREE",
        fields: [
          { name: "fin_acode" },
        ]
      },
      {
        name: "FK_fin_pl_fin_master_noteno",
        using: "BTREE",
        fields: [
          { name: "note_no" },
        ]
      },
    ]
  });
  }
}
