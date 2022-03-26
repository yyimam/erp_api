import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { fin_bal1, fin_bal1Id } from './fin_bal1';
import type { fin_bal2, fin_bal2Id } from './fin_bal2';
import type { fin_notes_detail, fin_notes_detailId } from './fin_notes_detail';
import type { fin_pl, fin_plId } from './fin_pl';

export interface fin_notes_masterAttributes {
  idno: number;
  note_no: number;
  notedate?: Date;
  sysdate?: Date;
}

export type fin_notes_masterPk = "idno";
export type fin_notes_masterId = fin_notes_master[fin_notes_masterPk];
export type fin_notes_masterOptionalAttributes = "notedate" | "sysdate";
export type fin_notes_masterCreationAttributes = Optional<fin_notes_masterAttributes, fin_notes_masterOptionalAttributes>;

export class fin_notes_master extends Model<fin_notes_masterAttributes, fin_notes_masterCreationAttributes> implements fin_notes_masterAttributes {
  idno!: number;
  note_no!: number;
  notedate?: Date;
  sysdate?: Date;

  // fin_notes_master hasMany fin_bal1 via note_no
  fin_bal1s!: fin_bal1[];
  getFin_bal1s!: Sequelize.HasManyGetAssociationsMixin<fin_bal1>;
  setFin_bal1s!: Sequelize.HasManySetAssociationsMixin<fin_bal1, fin_bal1Id>;
  addFin_bal1!: Sequelize.HasManyAddAssociationMixin<fin_bal1, fin_bal1Id>;
  addFin_bal1s!: Sequelize.HasManyAddAssociationsMixin<fin_bal1, fin_bal1Id>;
  createFin_bal1!: Sequelize.HasManyCreateAssociationMixin<fin_bal1>;
  removeFin_bal1!: Sequelize.HasManyRemoveAssociationMixin<fin_bal1, fin_bal1Id>;
  removeFin_bal1s!: Sequelize.HasManyRemoveAssociationsMixin<fin_bal1, fin_bal1Id>;
  hasFin_bal1!: Sequelize.HasManyHasAssociationMixin<fin_bal1, fin_bal1Id>;
  hasFin_bal1s!: Sequelize.HasManyHasAssociationsMixin<fin_bal1, fin_bal1Id>;
  countFin_bal1s!: Sequelize.HasManyCountAssociationsMixin;
  // fin_notes_master hasMany fin_bal2 via note_no
  fin_bal2s!: fin_bal2[];
  getFin_bal2s!: Sequelize.HasManyGetAssociationsMixin<fin_bal2>;
  setFin_bal2s!: Sequelize.HasManySetAssociationsMixin<fin_bal2, fin_bal2Id>;
  addFin_bal2!: Sequelize.HasManyAddAssociationMixin<fin_bal2, fin_bal2Id>;
  addFin_bal2s!: Sequelize.HasManyAddAssociationsMixin<fin_bal2, fin_bal2Id>;
  createFin_bal2!: Sequelize.HasManyCreateAssociationMixin<fin_bal2>;
  removeFin_bal2!: Sequelize.HasManyRemoveAssociationMixin<fin_bal2, fin_bal2Id>;
  removeFin_bal2s!: Sequelize.HasManyRemoveAssociationsMixin<fin_bal2, fin_bal2Id>;
  hasFin_bal2!: Sequelize.HasManyHasAssociationMixin<fin_bal2, fin_bal2Id>;
  hasFin_bal2s!: Sequelize.HasManyHasAssociationsMixin<fin_bal2, fin_bal2Id>;
  countFin_bal2s!: Sequelize.HasManyCountAssociationsMixin;
  // fin_notes_master hasMany fin_notes_detail via pidno
  fin_notes_details!: fin_notes_detail[];
  getFin_notes_details!: Sequelize.HasManyGetAssociationsMixin<fin_notes_detail>;
  setFin_notes_details!: Sequelize.HasManySetAssociationsMixin<fin_notes_detail, fin_notes_detailId>;
  addFin_notes_detail!: Sequelize.HasManyAddAssociationMixin<fin_notes_detail, fin_notes_detailId>;
  addFin_notes_details!: Sequelize.HasManyAddAssociationsMixin<fin_notes_detail, fin_notes_detailId>;
  createFin_notes_detail!: Sequelize.HasManyCreateAssociationMixin<fin_notes_detail>;
  removeFin_notes_detail!: Sequelize.HasManyRemoveAssociationMixin<fin_notes_detail, fin_notes_detailId>;
  removeFin_notes_details!: Sequelize.HasManyRemoveAssociationsMixin<fin_notes_detail, fin_notes_detailId>;
  hasFin_notes_detail!: Sequelize.HasManyHasAssociationMixin<fin_notes_detail, fin_notes_detailId>;
  hasFin_notes_details!: Sequelize.HasManyHasAssociationsMixin<fin_notes_detail, fin_notes_detailId>;
  countFin_notes_details!: Sequelize.HasManyCountAssociationsMixin;
  // fin_notes_master hasMany fin_notes_detail via ref_noteno
  ref_noteno_fin_notes_details!: fin_notes_detail[];
  getRef_noteno_fin_notes_details!: Sequelize.HasManyGetAssociationsMixin<fin_notes_detail>;
  setRef_noteno_fin_notes_details!: Sequelize.HasManySetAssociationsMixin<fin_notes_detail, fin_notes_detailId>;
  addRef_noteno_fin_notes_detail!: Sequelize.HasManyAddAssociationMixin<fin_notes_detail, fin_notes_detailId>;
  addRef_noteno_fin_notes_details!: Sequelize.HasManyAddAssociationsMixin<fin_notes_detail, fin_notes_detailId>;
  createRef_noteno_fin_notes_detail!: Sequelize.HasManyCreateAssociationMixin<fin_notes_detail>;
  removeRef_noteno_fin_notes_detail!: Sequelize.HasManyRemoveAssociationMixin<fin_notes_detail, fin_notes_detailId>;
  removeRef_noteno_fin_notes_details!: Sequelize.HasManyRemoveAssociationsMixin<fin_notes_detail, fin_notes_detailId>;
  hasRef_noteno_fin_notes_detail!: Sequelize.HasManyHasAssociationMixin<fin_notes_detail, fin_notes_detailId>;
  hasRef_noteno_fin_notes_details!: Sequelize.HasManyHasAssociationsMixin<fin_notes_detail, fin_notes_detailId>;
  countRef_noteno_fin_notes_details!: Sequelize.HasManyCountAssociationsMixin;
  // fin_notes_master hasMany fin_pl via note_no
  fin_pls!: fin_pl[];
  getFin_pls!: Sequelize.HasManyGetAssociationsMixin<fin_pl>;
  setFin_pls!: Sequelize.HasManySetAssociationsMixin<fin_pl, fin_plId>;
  addFin_pl!: Sequelize.HasManyAddAssociationMixin<fin_pl, fin_plId>;
  addFin_pls!: Sequelize.HasManyAddAssociationsMixin<fin_pl, fin_plId>;
  createFin_pl!: Sequelize.HasManyCreateAssociationMixin<fin_pl>;
  removeFin_pl!: Sequelize.HasManyRemoveAssociationMixin<fin_pl, fin_plId>;
  removeFin_pls!: Sequelize.HasManyRemoveAssociationsMixin<fin_pl, fin_plId>;
  hasFin_pl!: Sequelize.HasManyHasAssociationMixin<fin_pl, fin_plId>;
  hasFin_pls!: Sequelize.HasManyHasAssociationsMixin<fin_pl, fin_plId>;
  countFin_pls!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof fin_notes_master {
    return fin_notes_master.init({
    idno: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    note_no: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: "IX_fin_notes_master"
    },
    notedate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sysdate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'fin_notes_master',
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
        name: "IX_fin_notes_master",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "note_no" },
        ]
      },
    ]
  });
  }
}
