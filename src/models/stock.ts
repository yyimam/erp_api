import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ac, acId } from './ac';
import type { product, productId } from './product';
import type { warehouse_list, warehouse_listId } from './warehouse_list';

export interface stockAttributes {
  idno: number;
  pidno?: number;
  cidno?: number;
  edate?: Date;
  estatus?: string;
  itemcode?: string;
  Rec?: number;
  Iss?: number;
  loose_Rec?: number;
  loose_Iss?: number;
  balance?: number;
  loose_balance?: number;
  Amount?: number;
  description?: string;
  refno?: string;
  Rate?: number;
  Avg_Rate?: number;
  Warehouse_Code?: string;
  party?: string;
  Balance_Amount?: number;
  Order_No?: number;
  pcspctn?: number;
  yard_rec?: number;
  yard_iss?: number;
  rate_yards?: number;
}

export type stockPk = "idno";
export type stockId = stock[stockPk];
export type stockOptionalAttributes = "pidno" | "cidno" | "edate" | "estatus" | "itemcode" | "Rec" | "Iss" | "loose_Rec" | "loose_Iss" | "balance" | "loose_balance" | "Amount" | "description" | "refno" | "Rate" | "Avg_Rate" | "Warehouse_Code" | "party" | "Balance_Amount" | "Order_No" | "pcspctn" | "yard_rec" | "yard_iss" | "rate_yards";
export type stockCreationAttributes = Optional<stockAttributes, stockOptionalAttributes>;

export class stock extends Model<stockAttributes, stockCreationAttributes> implements stockAttributes {
  idno!: number;
  pidno?: number;
  cidno?: number;
  edate?: Date;
  estatus?: string;
  itemcode?: string;
  Rec?: number;
  Iss?: number;
  loose_Rec?: number;
  loose_Iss?: number;
  balance?: number;
  loose_balance?: number;
  Amount?: number;
  description?: string;
  refno?: string;
  Rate?: number;
  Avg_Rate?: number;
  Warehouse_Code?: string;
  party?: string;
  Balance_Amount?: number;
  Order_No?: number;
  pcspctn?: number;
  yard_rec?: number;
  yard_iss?: number;
  rate_yards?: number;

  // stock belongsTo ac via party
  party_ac!: ac;
  getParty_ac!: Sequelize.BelongsToGetAssociationMixin<ac>;
  setParty_ac!: Sequelize.BelongsToSetAssociationMixin<ac, acId>;
  createParty_ac!: Sequelize.BelongsToCreateAssociationMixin<ac>;
  // stock belongsTo product via itemcode
  itemcode_product!: product;
  getItemcode_product!: Sequelize.BelongsToGetAssociationMixin<product>;
  setItemcode_product!: Sequelize.BelongsToSetAssociationMixin<product, productId>;
  createItemcode_product!: Sequelize.BelongsToCreateAssociationMixin<product>;
  // stock belongsTo warehouse_list via Warehouse_Code
  Warehouse_Code_warehouse_list!: warehouse_list;
  getWarehouse_Code_warehouse_list!: Sequelize.BelongsToGetAssociationMixin<warehouse_list>;
  setWarehouse_Code_warehouse_list!: Sequelize.BelongsToSetAssociationMixin<warehouse_list, warehouse_listId>;
  createWarehouse_Code_warehouse_list!: Sequelize.BelongsToCreateAssociationMixin<warehouse_list>;

  static initModel(sequelize: Sequelize.Sequelize): typeof stock {
    return stock.init({
    idno: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pidno: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    cidno: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    edate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    estatus: {
      type: DataTypes.CHAR(2),
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
    Rec: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    Iss: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    loose_Rec: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    loose_Iss: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    balance: {
      type: DataTypes.DECIMAL(18,6),
      allowNull: true
    },
    loose_balance: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Amount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    refno: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Rate: {
      type: DataTypes.DECIMAL(18,4),
      allowNull: true
    },
    Avg_Rate: {
      type: DataTypes.DECIMAL(18,4),
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
    party: {
      type: DataTypes.CHAR(24),
      allowNull: true,
      references: {
        model: 'ac',
        key: 'acode'
      }
    },
    Balance_Amount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    Order_No: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    pcspctn: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    },
    yard_rec: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    yard_iss: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    rate_yards: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'stock',
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
        name: "IX_Stock",
        using: "BTREE",
        fields: [
          { name: "cidno" },
        ]
      },
      {
        name: "IX_Stock_1",
        using: "BTREE",
        fields: [
          { name: "edate" },
        ]
      },
      {
        name: "IX_Stock_2",
        using: "BTREE",
        fields: [
          { name: "estatus" },
        ]
      },
      {
        name: "IX_Stock_3",
        using: "BTREE",
        fields: [
          { name: "itemcode" },
        ]
      },
      {
        name: "IX_Stock_4",
        using: "BTREE",
        fields: [
          { name: "Order_No" },
        ]
      },
      {
        name: "IX_Stock_5",
        using: "BTREE",
        fields: [
          { name: "party" },
        ]
      },
      {
        name: "IX_Stock_6",
        using: "BTREE",
        fields: [
          { name: "pidno" },
        ]
      },
      {
        name: "IX_Stock_7",
        using: "BTREE",
        fields: [
          { name: "refno" },
        ]
      },
      {
        name: "IX_Stock_8",
        using: "BTREE",
        fields: [
          { name: "Warehouse_Code" },
        ]
      },
    ]
  });
  }
}
