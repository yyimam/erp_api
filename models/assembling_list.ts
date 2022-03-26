import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { product, productId } from './product';

export interface assembling_listAttributes {
  idno: number;
  mainitemcode?: string;
  subitemcode?: string;
  description?: string;
  qty?: number;
  sysdate?: Date;
  entryno?: number;
  edate?: Date;
  disabled?: number;
  wastage_qty?: number;
}

export type assembling_listPk = "idno";
export type assembling_listId = assembling_list[assembling_listPk];
export type assembling_listOptionalAttributes = "mainitemcode" | "subitemcode" | "description" | "qty" | "sysdate" | "entryno" | "edate" | "disabled" | "wastage_qty";
export type assembling_listCreationAttributes = Optional<assembling_listAttributes, assembling_listOptionalAttributes>;

export class assembling_list extends Model<assembling_listAttributes, assembling_listCreationAttributes> implements assembling_listAttributes {
  idno!: number;
  mainitemcode?: string;
  subitemcode?: string;
  description?: string;
  qty?: number;
  sysdate?: Date;
  entryno?: number;
  edate?: Date;
  disabled?: number;
  wastage_qty?: number;

  // assembling_list belongsTo product via mainitemcode
  mainitemcode_product!: product;
  getMainitemcode_product!: Sequelize.BelongsToGetAssociationMixin<product>;
  setMainitemcode_product!: Sequelize.BelongsToSetAssociationMixin<product, productId>;
  createMainitemcode_product!: Sequelize.BelongsToCreateAssociationMixin<product>;
  // assembling_list belongsTo product via subitemcode
  subitemcode_product!: product;
  getSubitemcode_product!: Sequelize.BelongsToGetAssociationMixin<product>;
  setSubitemcode_product!: Sequelize.BelongsToSetAssociationMixin<product, productId>;
  createSubitemcode_product!: Sequelize.BelongsToCreateAssociationMixin<product>;

  static initModel(sequelize: Sequelize.Sequelize): typeof assembling_list {
    return assembling_list.init({
    idno: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    mainitemcode: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      references: {
        model: 'product',
        key: 'code'
      }
    },
    subitemcode: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      references: {
        model: 'product',
        key: 'code'
      }
    },
    description: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    qty: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    sysdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    entryno: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    edate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    disabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    wastage_qty: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'assembling_list',
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
        name: "IX_Assembling_List",
        using: "BTREE",
        fields: [
          { name: "mainitemcode" },
        ]
      },
      {
        name: "IX_Assembling_List_1",
        using: "BTREE",
        fields: [
          { name: "subitemcode" },
        ]
      },
      {
        name: "IX_Assembling_List_2",
        using: "BTREE",
        fields: [
          { name: "entryno" },
        ]
      },
      {
        name: "IX_Assembling_List_3",
        using: "BTREE",
        fields: [
          { name: "edate" },
        ]
      },
    ]
  });
  }
}
