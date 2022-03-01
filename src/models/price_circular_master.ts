import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { price_circular_detail, price_circular_detailId } from './price_circular_detail';

export interface price_circular_masterAttributes {
  idno: number;
  EntryNo: number;
  edate?: Date;
  remarks?: string;
}

export type price_circular_masterPk = "idno";
export type price_circular_masterId = price_circular_master[price_circular_masterPk];
export type price_circular_masterOptionalAttributes = "edate" | "remarks";
export type price_circular_masterCreationAttributes = Optional<price_circular_masterAttributes, price_circular_masterOptionalAttributes>;

export class price_circular_master extends Model<price_circular_masterAttributes, price_circular_masterCreationAttributes> implements price_circular_masterAttributes {
  idno!: number;
  EntryNo!: number;
  edate?: Date;
  remarks?: string;

  // price_circular_master hasMany price_circular_detail via pidno
  price_circular_details!: price_circular_detail[];
  getPrice_circular_details!: Sequelize.HasManyGetAssociationsMixin<price_circular_detail>;
  setPrice_circular_details!: Sequelize.HasManySetAssociationsMixin<price_circular_detail, price_circular_detailId>;
  addPrice_circular_detail!: Sequelize.HasManyAddAssociationMixin<price_circular_detail, price_circular_detailId>;
  addPrice_circular_details!: Sequelize.HasManyAddAssociationsMixin<price_circular_detail, price_circular_detailId>;
  createPrice_circular_detail!: Sequelize.HasManyCreateAssociationMixin<price_circular_detail>;
  removePrice_circular_detail!: Sequelize.HasManyRemoveAssociationMixin<price_circular_detail, price_circular_detailId>;
  removePrice_circular_details!: Sequelize.HasManyRemoveAssociationsMixin<price_circular_detail, price_circular_detailId>;
  hasPrice_circular_detail!: Sequelize.HasManyHasAssociationMixin<price_circular_detail, price_circular_detailId>;
  hasPrice_circular_details!: Sequelize.HasManyHasAssociationsMixin<price_circular_detail, price_circular_detailId>;
  countPrice_circular_details!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof price_circular_master {
    return price_circular_master.init({
    idno: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    EntryNo: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    edate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    remarks: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'price_circular_master',
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
        name: "IX_Price_Circular_Master",
        using: "BTREE",
        fields: [
          { name: "edate" },
        ]
      },
      {
        name: "IX_Price_Circular_Master_1",
        using: "BTREE",
        fields: [
          { name: "EntryNo" },
        ]
      },
    ]
  });
  }
}
