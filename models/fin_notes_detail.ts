import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ac, acId } from './ac';
import type { fin_ac, fin_acId } from './fin_ac';
import type { fin_notes_master, fin_notes_masterId } from './fin_notes_master';

export interface fin_notes_detailAttributes {
  idno: number;
  pidno: number;
  sno?: number;
  descrip?: string;
  fin_acode?: string;
  ac_acode?: string;
  calc1?: string;
  calc2?: string;
  lines?: string;
  type?: string;
  ref_noteno?: number;
}

export type fin_notes_detailPk = "idno";
export type fin_notes_detailId = fin_notes_detail[fin_notes_detailPk];
export type fin_notes_detailOptionalAttributes = "sno" | "descrip" | "fin_acode" | "ac_acode" | "calc1" | "calc2" | "lines" | "type" | "ref_noteno";
export type fin_notes_detailCreationAttributes = Optional<fin_notes_detailAttributes, fin_notes_detailOptionalAttributes>;

export class fin_notes_detail extends Model<fin_notes_detailAttributes, fin_notes_detailCreationAttributes> implements fin_notes_detailAttributes {
  idno!: number;
  pidno!: number;
  sno?: number;
  descrip?: string;
  fin_acode?: string;
  ac_acode?: string;
  calc1?: string;
  calc2?: string;
  lines?: string;
  type?: string;
  ref_noteno?: number;

  // fin_notes_detail belongsTo ac via ac_acode
  ac_acode_ac!: ac;
  getAc_acode_ac!: Sequelize.BelongsToGetAssociationMixin<ac>;
  setAc_acode_ac!: Sequelize.BelongsToSetAssociationMixin<ac, acId>;
  createAc_acode_ac!: Sequelize.BelongsToCreateAssociationMixin<ac>;
  // fin_notes_detail belongsTo fin_ac via fin_acode
  fin_acode_fin_ac!: fin_ac;
  getFin_acode_fin_ac!: Sequelize.BelongsToGetAssociationMixin<fin_ac>;
  setFin_acode_fin_ac!: Sequelize.BelongsToSetAssociationMixin<fin_ac, fin_acId>;
  createFin_acode_fin_ac!: Sequelize.BelongsToCreateAssociationMixin<fin_ac>;
  // fin_notes_detail belongsTo fin_notes_master via pidno
  pidno_fin_notes_master!: fin_notes_master;
  getPidno_fin_notes_master!: Sequelize.BelongsToGetAssociationMixin<fin_notes_master>;
  setPidno_fin_notes_master!: Sequelize.BelongsToSetAssociationMixin<fin_notes_master, fin_notes_masterId>;
  createPidno_fin_notes_master!: Sequelize.BelongsToCreateAssociationMixin<fin_notes_master>;
  // fin_notes_detail belongsTo fin_notes_master via ref_noteno
  ref_noteno_fin_notes_master!: fin_notes_master;
  getRef_noteno_fin_notes_master!: Sequelize.BelongsToGetAssociationMixin<fin_notes_master>;
  setRef_noteno_fin_notes_master!: Sequelize.BelongsToSetAssociationMixin<fin_notes_master, fin_notes_masterId>;
  createRef_noteno_fin_notes_master!: Sequelize.BelongsToCreateAssociationMixin<fin_notes_master>;

  static initModel(sequelize: Sequelize.Sequelize): typeof fin_notes_detail {
    return fin_notes_detail.init({
    idno: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pidno: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'fin_notes_master',
        key: 'idno'
      }
    },
    sno: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    descrip: {
      type: DataTypes.STRING(250),
      allowNull: true
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
    type: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ref_noteno: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'fin_notes_master',
        key: 'note_no'
      }
    }
  }, {
    sequelize,
    tableName: 'fin_notes_detail',
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
        name: "FK_fin_notes_detail_ac",
        using: "BTREE",
        fields: [
          { name: "ac_acode" },
        ]
      },
      {
        name: "FK_fin_notes_detail_fin_ac",
        using: "BTREE",
        fields: [
          { name: "fin_acode" },
        ]
      },
      {
        name: "FK_fin_notes_detail_fin_notes_master",
        using: "BTREE",
        fields: [
          { name: "pidno" },
        ]
      },
      {
        name: "FK_fin_notes_detail_master_noteno",
        using: "BTREE",
        fields: [
          { name: "ref_noteno" },
        ]
      },
    ]
  });
  }
}
