import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { product, productId } from './product';
import type { warehouse_list, warehouse_listId } from './warehouse_list';

export interface consumption_detailAttributes {
  EntryNo?: number;
  edate?: Date;
  itemcode?: string;
  produceqty?: number;
  pidno?: number;
  cidno?: number;
  estatus?: string;
  Warehouse_Code?: string;
  remarks?: string;
  productname?: string;
  cproductname?: string;
  consumeqty?: number;
  subitemcode?: string;
  AL_Entryno?: number;
  batch_id?: string;
}
export type consumption_detaillPk = "idno";
export type consumption_detailId = consumption_detail[consumption_detaillPk];
export type consumption_detailOptionalAttributes = "EntryNo" | "edate" | "itemcode" | "produceqty" | "pidno" | "cidno" | "estatus" | "Warehouse_Code" | "remarks" | "productname" | "cproductname" | "consumeqty" | "subitemcode" | "AL_Entryno" | "batch_id";
export type consumption_detailCreationAttributes = Optional<consumption_detailAttributes, consumption_detailOptionalAttributes>;

export class consumption_detail extends Model<consumption_detailAttributes, consumption_detailCreationAttributes> implements consumption_detailAttributes {
  idno!: number;
  EntryNo?: number;
  edate?: Date;
  itemcode?: string;
  produceqty?: number;
  pidno?: number;
  cidno?: number;
  estatus?: string;
  Warehouse_Code?: string;
  remarks?: string;
  productname?: string;
  cproductname?: string;
  consumeqty?: number;
  subitemcode?: string;
  AL_Entryno?: number;
  batch_id?: string;

  // consumption_detail belongsTo product via itemcode
  itemcode_product!: product;
  getItemcode_product!: Sequelize.BelongsToGetAssociationMixin<product>;
  setItemcode_product!: Sequelize.BelongsToSetAssociationMixin<product, productId>;
  createItemcode_product!: Sequelize.BelongsToCreateAssociationMixin<product>;
  // consumption_detail belongsTo product via subitemcode
  subitemcode_product!: product;
  getSubitemcode_product!: Sequelize.BelongsToGetAssociationMixin<product>;
  setSubitemcode_product!: Sequelize.BelongsToSetAssociationMixin<product, productId>;
  createSubitemcode_product!: Sequelize.BelongsToCreateAssociationMixin<product>;
  // consumption_detail belongsTo warehouse_list via Warehouse_Code
  Warehouse_Code_warehouse_list!: warehouse_list;
  getWarehouse_Code_warehouse_list!: Sequelize.BelongsToGetAssociationMixin<warehouse_list>;
  setWarehouse_Code_warehouse_list!: Sequelize.BelongsToSetAssociationMixin<warehouse_list, warehouse_listId>;
  createWarehouse_Code_warehouse_list!: Sequelize.BelongsToCreateAssociationMixin<warehouse_list>;

  static initModel(sequelize: Sequelize.Sequelize): typeof consumption_detail {
    return consumption_detail.init({
    EntryNo: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    edate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    itemcode: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      references: {
        model: 'product',
        key: 'code'
      }
    },
    produceqty: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    pidno: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    cidno: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    estatus: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    Warehouse_Code: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      references: {
        model: 'warehouse_list',
        key: 'code'
      }
    },
    remarks: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    productname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cproductname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    consumeqty: {
      type: DataTypes.DECIMAL(31,8),
      allowNull: true
    },
    subitemcode: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      references: {
        model: 'product',
        key: 'code'
      }
    },
    AL_Entryno: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    batch_id: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'consumption_detail',
    timestamps: false,
    indexes: [
      {
        name: "IX_Consumption_Detail",
        using: "BTREE",
        fields: [
          { name: "AL_Entryno" },
        ]
      },
      {
        name: "IX_Consumption_Detail_1",
        using: "BTREE",
        fields: [
          { name: "batch_id" },
        ]
      },
      {
        name: "IX_Consumption_Detail_10",
        using: "BTREE",
        fields: [
          { name: "Warehouse_Code" },
        ]
      },
      {
        name: "IX_Consumption_Detail_2",
        using: "BTREE",
        fields: [
          { name: "cidno" },
        ]
      },
      {
        name: "IX_Consumption_Detail_3",
        using: "BTREE",
        fields: [
          { name: "cproductname" },
        ]
      },
      {
        name: "IX_Consumption_Detail_4",
        using: "BTREE",
        fields: [
          { name: "edate" },
        ]
      },
      {
        name: "IX_Consumption_Detail_5",
        using: "BTREE",
        fields: [
          { name: "EntryNo" },
        ]
      },
      {
        name: "IX_Consumption_Detail_6",
        using: "BTREE",
        fields: [
          { name: "estatus" },
        ]
      },
      {
        name: "IX_Consumption_Detail_7",
        using: "BTREE",
        fields: [
          { name: "itemcode" },
        ]
      },
      {
        name: "IX_Consumption_Detail_8",
        using: "BTREE",
        fields: [
          { name: "pidno" },
        ]
      },
      {
        name: "IX_Consumption_Detail_9",
        using: "BTREE",
        fields: [
          { name: "subitemcode" },
        ]
      },
    ]
  });
  }
}
