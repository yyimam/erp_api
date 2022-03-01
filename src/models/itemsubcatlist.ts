import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { product, productId } from './product';

export interface itemsubcatlistAttributes {
  code: string;
  name?: string;
}

export type itemsubcatlistPk = "code";
export type itemsubcatlistId = itemsubcatlist[itemsubcatlistPk];
export type itemsubcatlistOptionalAttributes = "name";
export type itemsubcatlistCreationAttributes = Optional<itemsubcatlistAttributes, itemsubcatlistOptionalAttributes>;

export class itemsubcatlist extends Model<itemsubcatlistAttributes, itemsubcatlistCreationAttributes> implements itemsubcatlistAttributes {
  code!: string;
  name?: string;

  // itemsubcatlist hasMany product via subitemcat
  products!: product[];
  getProducts!: Sequelize.HasManyGetAssociationsMixin<product>;
  setProducts!: Sequelize.HasManySetAssociationsMixin<product, productId>;
  addProduct!: Sequelize.HasManyAddAssociationMixin<product, productId>;
  addProducts!: Sequelize.HasManyAddAssociationsMixin<product, productId>;
  createProduct!: Sequelize.HasManyCreateAssociationMixin<product>;
  removeProduct!: Sequelize.HasManyRemoveAssociationMixin<product, productId>;
  removeProducts!: Sequelize.HasManyRemoveAssociationsMixin<product, productId>;
  hasProduct!: Sequelize.HasManyHasAssociationMixin<product, productId>;
  hasProducts!: Sequelize.HasManyHasAssociationsMixin<product, productId>;
  countProducts!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof itemsubcatlist {
    return itemsubcatlist.init({
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'itemsubcatlist',
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
