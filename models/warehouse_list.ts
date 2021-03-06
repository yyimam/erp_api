import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ac_ledger, ac_ledgerId } from './ac_ledger';
import type { billing_detail, billing_detailId } from './billing_detail';
import type { billing_master, billing_masterId } from './billing_master';
import type { consumption_detail, consumption_detailId } from './consumption_detail';
import type { order_master, order_masterId } from './order_master';
import type { stock, stockId } from './stock';

export interface warehouse_listAttributes {
  code: string;
  name?: string;
}

export type warehouse_listPk = "code";
export type warehouse_listId = warehouse_list[warehouse_listPk];
export type warehouse_listOptionalAttributes = "name";
export type warehouse_listCreationAttributes = Optional<warehouse_listAttributes, warehouse_listOptionalAttributes>;

export class warehouse_list extends Model<warehouse_listAttributes, warehouse_listCreationAttributes> implements warehouse_listAttributes {
  code!: string;
  name?: string;

  // warehouse_list hasMany ac_ledger via Warehouse_Code
  ac_ledgers!: ac_ledger[];
  getAc_ledgers!: Sequelize.HasManyGetAssociationsMixin<ac_ledger>;
  setAc_ledgers!: Sequelize.HasManySetAssociationsMixin<ac_ledger, ac_ledgerId>;
  addAc_ledger!: Sequelize.HasManyAddAssociationMixin<ac_ledger, ac_ledgerId>;
  addAc_ledgers!: Sequelize.HasManyAddAssociationsMixin<ac_ledger, ac_ledgerId>;
  createAc_ledger!: Sequelize.HasManyCreateAssociationMixin<ac_ledger>;
  removeAc_ledger!: Sequelize.HasManyRemoveAssociationMixin<ac_ledger, ac_ledgerId>;
  removeAc_ledgers!: Sequelize.HasManyRemoveAssociationsMixin<ac_ledger, ac_ledgerId>;
  hasAc_ledger!: Sequelize.HasManyHasAssociationMixin<ac_ledger, ac_ledgerId>;
  hasAc_ledgers!: Sequelize.HasManyHasAssociationsMixin<ac_ledger, ac_ledgerId>;
  countAc_ledgers!: Sequelize.HasManyCountAssociationsMixin;
  // warehouse_list hasMany billing_detail via Warehouse_Code
  billing_details!: billing_detail[];
  getBilling_details!: Sequelize.HasManyGetAssociationsMixin<billing_detail>;
  setBilling_details!: Sequelize.HasManySetAssociationsMixin<billing_detail, billing_detailId>;
  addBilling_detail!: Sequelize.HasManyAddAssociationMixin<billing_detail, billing_detailId>;
  addBilling_details!: Sequelize.HasManyAddAssociationsMixin<billing_detail, billing_detailId>;
  createBilling_detail!: Sequelize.HasManyCreateAssociationMixin<billing_detail>;
  removeBilling_detail!: Sequelize.HasManyRemoveAssociationMixin<billing_detail, billing_detailId>;
  removeBilling_details!: Sequelize.HasManyRemoveAssociationsMixin<billing_detail, billing_detailId>;
  hasBilling_detail!: Sequelize.HasManyHasAssociationMixin<billing_detail, billing_detailId>;
  hasBilling_details!: Sequelize.HasManyHasAssociationsMixin<billing_detail, billing_detailId>;
  countBilling_details!: Sequelize.HasManyCountAssociationsMixin;
  // warehouse_list hasMany billing_detail via Warehouse_CodeInto
  Warehouse_CodeInto_billing_details!: billing_detail[];
  getWarehouse_CodeInto_billing_details!: Sequelize.HasManyGetAssociationsMixin<billing_detail>;
  setWarehouse_CodeInto_billing_details!: Sequelize.HasManySetAssociationsMixin<billing_detail, billing_detailId>;
  addWarehouse_CodeInto_billing_detail!: Sequelize.HasManyAddAssociationMixin<billing_detail, billing_detailId>;
  addWarehouse_CodeInto_billing_details!: Sequelize.HasManyAddAssociationsMixin<billing_detail, billing_detailId>;
  createWarehouse_CodeInto_billing_detail!: Sequelize.HasManyCreateAssociationMixin<billing_detail>;
  removeWarehouse_CodeInto_billing_detail!: Sequelize.HasManyRemoveAssociationMixin<billing_detail, billing_detailId>;
  removeWarehouse_CodeInto_billing_details!: Sequelize.HasManyRemoveAssociationsMixin<billing_detail, billing_detailId>;
  hasWarehouse_CodeInto_billing_detail!: Sequelize.HasManyHasAssociationMixin<billing_detail, billing_detailId>;
  hasWarehouse_CodeInto_billing_details!: Sequelize.HasManyHasAssociationsMixin<billing_detail, billing_detailId>;
  countWarehouse_CodeInto_billing_details!: Sequelize.HasManyCountAssociationsMixin;
  // warehouse_list hasMany billing_master via Warehouse_Code
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
  // warehouse_list hasMany consumption_detail via Warehouse_Code
  consumption_details!: consumption_detail[];
  getConsumption_details!: Sequelize.HasManyGetAssociationsMixin<consumption_detail>;
  setConsumption_details!: Sequelize.HasManySetAssociationsMixin<consumption_detail, consumption_detailId>;
  addConsumption_detail!: Sequelize.HasManyAddAssociationMixin<consumption_detail, consumption_detailId>;
  addConsumption_details!: Sequelize.HasManyAddAssociationsMixin<consumption_detail, consumption_detailId>;
  createConsumption_detail!: Sequelize.HasManyCreateAssociationMixin<consumption_detail>;
  removeConsumption_detail!: Sequelize.HasManyRemoveAssociationMixin<consumption_detail, consumption_detailId>;
  removeConsumption_details!: Sequelize.HasManyRemoveAssociationsMixin<consumption_detail, consumption_detailId>;
  hasConsumption_detail!: Sequelize.HasManyHasAssociationMixin<consumption_detail, consumption_detailId>;
  hasConsumption_details!: Sequelize.HasManyHasAssociationsMixin<consumption_detail, consumption_detailId>;
  countConsumption_details!: Sequelize.HasManyCountAssociationsMixin;
  // warehouse_list hasMany order_master via Warehouse_Code
  order_masters!: order_master[];
  getOrder_masters!: Sequelize.HasManyGetAssociationsMixin<order_master>;
  setOrder_masters!: Sequelize.HasManySetAssociationsMixin<order_master, order_masterId>;
  addOrder_master!: Sequelize.HasManyAddAssociationMixin<order_master, order_masterId>;
  addOrder_masters!: Sequelize.HasManyAddAssociationsMixin<order_master, order_masterId>;
  createOrder_master!: Sequelize.HasManyCreateAssociationMixin<order_master>;
  removeOrder_master!: Sequelize.HasManyRemoveAssociationMixin<order_master, order_masterId>;
  removeOrder_masters!: Sequelize.HasManyRemoveAssociationsMixin<order_master, order_masterId>;
  hasOrder_master!: Sequelize.HasManyHasAssociationMixin<order_master, order_masterId>;
  hasOrder_masters!: Sequelize.HasManyHasAssociationsMixin<order_master, order_masterId>;
  countOrder_masters!: Sequelize.HasManyCountAssociationsMixin;
  // warehouse_list hasMany stock via Warehouse_Code
  stocks!: stock[];
  getStocks!: Sequelize.HasManyGetAssociationsMixin<stock>;
  setStocks!: Sequelize.HasManySetAssociationsMixin<stock, stockId>;
  addStock!: Sequelize.HasManyAddAssociationMixin<stock, stockId>;
  addStocks!: Sequelize.HasManyAddAssociationsMixin<stock, stockId>;
  createStock!: Sequelize.HasManyCreateAssociationMixin<stock>;
  removeStock!: Sequelize.HasManyRemoveAssociationMixin<stock, stockId>;
  removeStocks!: Sequelize.HasManyRemoveAssociationsMixin<stock, stockId>;
  hasStock!: Sequelize.HasManyHasAssociationMixin<stock, stockId>;
  hasStocks!: Sequelize.HasManyHasAssociationsMixin<stock, stockId>;
  countStocks!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof warehouse_list {
    return warehouse_list.init({
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
    tableName: 'warehouse_list',
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
