import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ac, acId } from './ac';

export interface city_listAttributes {
  code: string;
  name?: string;
}

export type city_listPk = "code";
export type city_listId = city_list[city_listPk];
export type city_listOptionalAttributes = "name";
export type city_listCreationAttributes = Optional<city_listAttributes, city_listOptionalAttributes>;

export class city_list extends Model<city_listAttributes, city_listCreationAttributes> implements city_listAttributes {
  code!: string;
  name?: string;

  // city_list hasMany ac via citycode
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

  static initModel(sequelize: Sequelize.Sequelize): typeof city_list {
    return city_list.init({
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
    tableName: 'city_list',
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
