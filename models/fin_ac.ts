import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { fin_bal1, fin_bal1Id } from './fin_bal1';
import type { fin_bal2, fin_bal2Id } from './fin_bal2';
import type { fin_notes_detail, fin_notes_detailId } from './fin_notes_detail';
import type { fin_pl, fin_plId } from './fin_pl';

export interface fin_acAttributes {
  acode: string;
  title: string;
  curr_year?: number;
  prev_year?: number;
}

export type fin_acPk = "acode";
export type fin_acId = fin_ac[fin_acPk];
export type fin_acOptionalAttributes = "curr_year" | "prev_year";
export type fin_acCreationAttributes = Optional<fin_acAttributes, fin_acOptionalAttributes>;

export class fin_ac extends Model<fin_acAttributes, fin_acCreationAttributes> implements fin_acAttributes {
  acode!: string;
  title!: string;
  curr_year?: number;
  prev_year?: number;

  // fin_ac hasMany fin_bal1 via fin_acode
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
  // fin_ac hasMany fin_bal2 via fin_acode
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
  // fin_ac hasMany fin_notes_detail via fin_acode
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
  // fin_ac hasMany fin_pl via fin_acode
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

  static initModel(sequelize: Sequelize.Sequelize): typeof fin_ac {
    return fin_ac.init({
    acode: {
      type: DataTypes.CHAR(24),
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    curr_year: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    prev_year: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'fin_ac',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "acode" },
        ]
      },
    ]
  });
  }
}
