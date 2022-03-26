import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { billing_master, billing_masterId } from './billing_master';

export interface return_type_listAttributes {
  code: string;
  name?: string;
}

export type return_type_listPk = "code";
export type return_type_listId = return_type_list[return_type_listPk];
export type return_type_listOptionalAttributes = "name";
export type return_type_listCreationAttributes = Optional<return_type_listAttributes, return_type_listOptionalAttributes>;

export class return_type_list extends Model<return_type_listAttributes, return_type_listCreationAttributes> implements return_type_listAttributes {
  code!: string;
  name?: string;

  // return_type_list hasMany billing_master via return_type
  billing_masters!: billing_master[];
  getBilling_masters!: Sequelize.HasManyGetAssociationsMixin<billing_master>;
  setBilling_masters!: Sequelize.HasManySetAssociationsMixin<billing_master, billing_masterId>;
  addBilling_master!: Sequelize.HasManyAddAssociationMixin<billing_master, billing_masterId>;
  addBilling_masters!: Sequelize.HasManyAddAssociationsMixin<billing_master, billing_masterId>;
  createBilling_master!: Sequelize.HasManyCreateAssociationMixin<billing_master>;
  removeBilling_master!: Sequelize.HasManyRemoveAssociationMixin<billing_master, billing_masterId>;
  removeBilling_masters!: Sequelize.HasManyRemoveAssociationsMixin<billing_master, billing_masterId>;
  hasBilling_master!: Sequelize.HasManyHasAssociationMixin<billing_master, billing_masterId>;
  hasBilling_masters!: Sequelize.HasManyHasAssociationsMixin<billing_master, billing_masterId>;
  countBilling_masters!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof return_type_list {
    return return_type_list.init({
    code: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'return_type_list',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  }
}
