import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ac, acId } from './ac';

export interface group_listAttributes {
  code: string;
  name?: string;
}

export type group_listPk = "code";
export type group_listId = group_list[group_listPk];
export type group_listOptionalAttributes = "name";
export type group_listCreationAttributes = Optional<group_listAttributes, group_listOptionalAttributes>;

export class group_list extends Model<group_listAttributes, group_listCreationAttributes> implements group_listAttributes {
  code!: string;
  name?: string;

  // group_list hasMany ac via groupcode
  acs!: ac[];
  getAcs!: Sequelize.HasManyGetAssociationsMixin<ac>;
  setAcs!: Sequelize.HasManySetAssociationsMixin<ac, acId>;
  addAc!: Sequelize.HasManyAddAssociationMixin<ac, acId>;
  addAcs!: Sequelize.HasManyAddAssociationsMixin<ac, acId>;
  createAc!: Sequelize.HasManyCreateAssociationMixin<ac>;
  removeAc!: Sequelize.HasManyRemoveAssociationMixin<ac, acId>;
  removeAcs!: Sequelize.HasManyRemoveAssociationsMixin<ac, acId>;
  hasAc!: Sequelize.HasManyHasAssociationMixin<ac, acId>;
  hasAcs!: Sequelize.HasManyHasAssociationsMixin<ac, acId>;
  countAcs!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof group_list {
    return group_list.init({
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'group_list',
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
