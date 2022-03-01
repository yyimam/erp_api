import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { product, productId } from './product';

export interface itemcatAttributes {
  code: string;
  name?: string;
}

export type itemcatPk = "code";
export type itemcatId = itemcat[itemcatPk];
export type itemcatOptionalAttributes = "name";
export type itemcatCreationAttributes = Optional<itemcatAttributes, itemcatOptionalAttributes>;

export class itemcat extends Model<itemcatAttributes, itemcatCreationAttributes> implements itemcatAttributes {
  code!: string;
  name?: string;

  // itemcat hasMany product via itemcat
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

  static initModel(sequelize: Sequelize.Sequelize): typeof itemcat {
    return itemcat.init({
    code: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'itemcat',
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
