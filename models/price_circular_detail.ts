import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { price_circular_master, price_circular_masterId } from './price_circular_master';
import type { product, productId } from './product';

export interface price_circular_detailAttributes {
  idno: number;
  pidno: number;
  itemcode?: string;
  rate?: number;
  schmper?: number;
  bonuspcs?: number;
  MRP?: number;
}

export type price_circular_detailPk = "idno";
export type price_circular_detailId = price_circular_detail[price_circular_detailPk];
export type price_circular_detailOptionalAttributes = "itemcode" | "rate" | "schmper" | "bonuspcs" | "MRP";
export type price_circular_detailCreationAttributes = Optional<price_circular_detailAttributes, price_circular_detailOptionalAttributes>;

export class price_circular_detail extends Model<price_circular_detailAttributes, price_circular_detailCreationAttributes> implements price_circular_detailAttributes {
  idno!: number;
  pidno!: number;
  itemcode?: string;
  rate?: number;
  schmper?: number;
  bonuspcs?: number;
  MRP?: number;

  // price_circular_detail belongsTo price_circular_master via pidno
  pidno_price_circular_master!: price_circular_master;
  getPidno_price_circular_master!: Sequelize.BelongsToGetAssociationMixin<price_circular_master>;
  setPidno_price_circular_master!: Sequelize.BelongsToSetAssociationMixin<price_circular_master, price_circular_masterId>;
  createPidno_price_circular_master!: Sequelize.BelongsToCreateAssociationMixin<price_circular_master>;
  // price_circular_detail belongsTo product via itemcode
  itemcode_product!: product;
  getItemcode_product!: Sequelize.BelongsToGetAssociationMixin<product>;
  setItemcode_product!: Sequelize.BelongsToSetAssociationMixin<product, productId>;
  createItemcode_product!: Sequelize.BelongsToCreateAssociationMixin<product>;

  static initModel(sequelize: Sequelize.Sequelize): typeof price_circular_detail {
    return price_circular_detail.init({
    idno: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pidno: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'price_circular_master',
        key: 'idno'
      }
    },
    itemcode: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      references: {
        model: 'product',
        key: 'code'
      }
    },
    rate: {
      type: DataTypes.DECIMAL(12,4),
      allowNull: true,
      defaultValue: 0.0000
    },
    schmper: {
      type: DataTypes.DECIMAL(8,4),
      allowNull: true,
      defaultValue: 0.0000
    },
    bonuspcs: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    MRP: {
      type: DataTypes.DECIMAL(14,4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'price_circular_detail',
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
        name: "FK_Price_Circular_Detail_Price_Circular_Master",
        using: "BTREE",
        fields: [
          { name: "pidno" },
        ]
      },
      {
        name: "FK_Price_Circular_Detail_Product",
        using: "BTREE",
        fields: [
          { name: "itemcode" },
        ]
      },
    ]
  });
  }
}
