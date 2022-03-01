import { Table } from 'sequelize-typescript';
import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { assembling_list, assembling_listId } from './assembling_list';
import type { billing_detail, billing_detailId } from './billing_detail';
import type { billing_master, billing_masterId } from './billing_master';
import type { consumption_detail, consumption_detailId } from './consumption_detail';
import type { itembrandlist, itembrandlistId } from './itembrandlist';
import type { itemcat, itemcatId } from './itemcat';
import type { itemsubcatlist, itemsubcatlistId } from './itemsubcatlist';
import type { itemtype, itemtypeId } from './itemtype';
import type { order_detail, order_detailId } from './order_detail';
import type { price_circular_detail, price_circular_detailId } from './price_circular_detail';
import type { stock, stockId } from './stock';
import type { voucher_detail, voucher_detailId } from './voucher_detail';

export interface productAttributes {
  code: string;
  name: string;
  itemtype: string;
  itemcat?: string;
  rate?: number;
  itemunit?: string;
  subitemcat?: string;
  brand?: string;
  prate?: number;
  origin?: string;
  pcspctn?: number;
  schmper?: number;
  xschmper?: number;
  bonuspcs?: number;
  article?: string;
  metrounit?: number;
  pkcgtype?: string;
  weight?: number;
  measurment?: number;
  barcode?: string;
  minqty?: number;
  density?: number;
  Scrap?: number;
  filename?: string;
  no_of_files?: number;
  batch_id?: string;
  round_in_matreq?: number;
  old_code?: string;
  item_disabled?: number;
}

export type productPk = "code";
export type productId = product[productPk];
export type productOptionalAttributes = "itemcat" | "rate" | "itemunit" | "subitemcat" | "brand" | "prate" | "origin" | "pcspctn" | "schmper" | "xschmper" | "bonuspcs" | "article" | "metrounit" | "pkcgtype" | "weight" | "measurment" | "barcode" | "minqty" | "density" | "Scrap" | "filename" | "no_of_files" | "batch_id" | "round_in_matreq" | "old_code" | "item_disabled";
export type productCreationAttributes = Optional<productAttributes, productOptionalAttributes>;

@Table
export class product extends Model<productAttributes, productCreationAttributes> implements productAttributes {
  code!: string;
  name!: string;
  itemtype!: string;
  itemcat?: string;
  rate?: number;
  itemunit?: string;
  subitemcat?: string;
  brand?: string;
  prate?: number;
  origin?: string;
  pcspctn?: number;
  schmper?: number;
  xschmper?: number;
  bonuspcs?: number;
  article?: string;
  metrounit?: number;
  pkcgtype?: string;
  weight?: number;
  measurment?: number;
  barcode?: string;
  minqty?: number;
  density?: number;
  Scrap?: number;
  filename?: string;
  no_of_files?: number;
  batch_id?: string;
  round_in_matreq?: number;
  old_code?: string;
  item_disabled?: number;

  // product belongsTo itembrandlist via brand
  brand_itembrandlist!: itembrandlist;
  getBrand_itembrandlist!: Sequelize.BelongsToGetAssociationMixin<itembrandlist>;
  setBrand_itembrandlist!: Sequelize.BelongsToSetAssociationMixin<itembrandlist, itembrandlistId>;
  createBrand_itembrandlist!: Sequelize.BelongsToCreateAssociationMixin<itembrandlist>;
  // product belongsTo itemcat via itemcat
  itemcat_itemcat!: itemcat;
  getItemcat_itemcat!: Sequelize.BelongsToGetAssociationMixin<itemcat>;
  setItemcat_itemcat!: Sequelize.BelongsToSetAssociationMixin<itemcat, itemcatId>;
  createItemcat_itemcat!: Sequelize.BelongsToCreateAssociationMixin<itemcat>;
  // product belongsTo itemsubcatlist via subitemcat
  subitemcat_itemsubcatlist!: itemsubcatlist;
  getSubitemcat_itemsubcatlist!: Sequelize.BelongsToGetAssociationMixin<itemsubcatlist>;
  setSubitemcat_itemsubcatlist!: Sequelize.BelongsToSetAssociationMixin<itemsubcatlist, itemsubcatlistId>;
  createSubitemcat_itemsubcatlist!: Sequelize.BelongsToCreateAssociationMixin<itemsubcatlist>;
  // product belongsTo itemtype via itemtype
  itemtype_itemtype!: itemtype;
  getItemtype_itemtype!: Sequelize.BelongsToGetAssociationMixin<itemtype>;
  setItemtype_itemtype!: Sequelize.BelongsToSetAssociationMixin<itemtype, itemtypeId>;
  createItemtype_itemtype!: Sequelize.BelongsToCreateAssociationMixin<itemtype>;
  // product hasMany assembling_list via mainitemcode
  assembling_lists!: assembling_list[];
  getAssembling_lists!: Sequelize.HasManyGetAssociationsMixin<assembling_list>;
  setAssembling_lists!: Sequelize.HasManySetAssociationsMixin<assembling_list, assembling_listId>;
  addAssembling_list!: Sequelize.HasManyAddAssociationMixin<assembling_list, assembling_listId>;
  addAssembling_lists!: Sequelize.HasManyAddAssociationsMixin<assembling_list, assembling_listId>;
  createAssembling_list!: Sequelize.HasManyCreateAssociationMixin<assembling_list>;
  removeAssembling_list!: Sequelize.HasManyRemoveAssociationMixin<assembling_list, assembling_listId>;
  removeAssembling_lists!: Sequelize.HasManyRemoveAssociationsMixin<assembling_list, assembling_listId>;
  hasAssembling_list!: Sequelize.HasManyHasAssociationMixin<assembling_list, assembling_listId>;
  hasAssembling_lists!: Sequelize.HasManyHasAssociationsMixin<assembling_list, assembling_listId>;
  countAssembling_lists!: Sequelize.HasManyCountAssociationsMixin;
  // product hasMany assembling_list via subitemcode
  subitemcode_assembling_lists!: assembling_list[];
  getSubitemcode_assembling_lists!: Sequelize.HasManyGetAssociationsMixin<assembling_list>;
  setSubitemcode_assembling_lists!: Sequelize.HasManySetAssociationsMixin<assembling_list, assembling_listId>;
  addSubitemcode_assembling_list!: Sequelize.HasManyAddAssociationMixin<assembling_list, assembling_listId>;
  addSubitemcode_assembling_lists!: Sequelize.HasManyAddAssociationsMixin<assembling_list, assembling_listId>;
  createSubitemcode_assembling_list!: Sequelize.HasManyCreateAssociationMixin<assembling_list>;
  removeSubitemcode_assembling_list!: Sequelize.HasManyRemoveAssociationMixin<assembling_list, assembling_listId>;
  removeSubitemcode_assembling_lists!: Sequelize.HasManyRemoveAssociationsMixin<assembling_list, assembling_listId>;
  hasSubitemcode_assembling_list!: Sequelize.HasManyHasAssociationMixin<assembling_list, assembling_listId>;
  hasSubitemcode_assembling_lists!: Sequelize.HasManyHasAssociationsMixin<assembling_list, assembling_listId>;
  countSubitemcode_assembling_lists!: Sequelize.HasManyCountAssociationsMixin;
  // product hasMany billing_detail via itemcode
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
  // product hasMany billing_detail via fitemcode
  fitemcode_billing_details!: billing_detail[];
  getFitemcode_billing_details!: Sequelize.HasManyGetAssociationsMixin<billing_detail>;
  setFitemcode_billing_details!: Sequelize.HasManySetAssociationsMixin<billing_detail, billing_detailId>;
  addFitemcode_billing_detail!: Sequelize.HasManyAddAssociationMixin<billing_detail, billing_detailId>;
  addFitemcode_billing_details!: Sequelize.HasManyAddAssociationsMixin<billing_detail, billing_detailId>;
  createFitemcode_billing_detail!: Sequelize.HasManyCreateAssociationMixin<billing_detail>;
  removeFitemcode_billing_detail!: Sequelize.HasManyRemoveAssociationMixin<billing_detail, billing_detailId>;
  removeFitemcode_billing_details!: Sequelize.HasManyRemoveAssociationsMixin<billing_detail, billing_detailId>;
  hasFitemcode_billing_detail!: Sequelize.HasManyHasAssociationMixin<billing_detail, billing_detailId>;
  hasFitemcode_billing_details!: Sequelize.HasManyHasAssociationsMixin<billing_detail, billing_detailId>;
  countFitemcode_billing_details!: Sequelize.HasManyCountAssociationsMixin;
  // product hasMany billing_master via fitem_code
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
  // product hasMany consumption_detail via itemcode
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
  // product hasMany consumption_detail via subitemcode
  subitemcode_consumption_details!: consumption_detail[];
  getSubitemcode_consumption_details!: Sequelize.HasManyGetAssociationsMixin<consumption_detail>;
  setSubitemcode_consumption_details!: Sequelize.HasManySetAssociationsMixin<consumption_detail, consumption_detailId>;
  addSubitemcode_consumption_detail!: Sequelize.HasManyAddAssociationMixin<consumption_detail, consumption_detailId>;
  addSubitemcode_consumption_details!: Sequelize.HasManyAddAssociationsMixin<consumption_detail, consumption_detailId>;
  createSubitemcode_consumption_detail!: Sequelize.HasManyCreateAssociationMixin<consumption_detail>;
  removeSubitemcode_consumption_detail!: Sequelize.HasManyRemoveAssociationMixin<consumption_detail, consumption_detailId>;
  removeSubitemcode_consumption_details!: Sequelize.HasManyRemoveAssociationsMixin<consumption_detail, consumption_detailId>;
  hasSubitemcode_consumption_detail!: Sequelize.HasManyHasAssociationMixin<consumption_detail, consumption_detailId>;
  hasSubitemcode_consumption_details!: Sequelize.HasManyHasAssociationsMixin<consumption_detail, consumption_detailId>;
  countSubitemcode_consumption_details!: Sequelize.HasManyCountAssociationsMixin;
  // product hasMany order_detail via itemcode
  order_details!: order_detail[];
  getOrder_details!: Sequelize.HasManyGetAssociationsMixin<order_detail>;
  setOrder_details!: Sequelize.HasManySetAssociationsMixin<order_detail, order_detailId>;
  addOrder_detail!: Sequelize.HasManyAddAssociationMixin<order_detail, order_detailId>;
  addOrder_details!: Sequelize.HasManyAddAssociationsMixin<order_detail, order_detailId>;
  createOrder_detail!: Sequelize.HasManyCreateAssociationMixin<order_detail>;
  removeOrder_detail!: Sequelize.HasManyRemoveAssociationMixin<order_detail, order_detailId>;
  removeOrder_details!: Sequelize.HasManyRemoveAssociationsMixin<order_detail, order_detailId>;
  hasOrder_detail!: Sequelize.HasManyHasAssociationMixin<order_detail, order_detailId>;
  hasOrder_details!: Sequelize.HasManyHasAssociationsMixin<order_detail, order_detailId>;
  countOrder_details!: Sequelize.HasManyCountAssociationsMixin;
  // product hasMany price_circular_detail via itemcode
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
  // product hasMany stock via itemcode
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
  // product hasMany voucher_detail via product
  voucher_details!: voucher_detail[];
  getVoucher_details!: Sequelize.HasManyGetAssociationsMixin<voucher_detail>;
  setVoucher_details!: Sequelize.HasManySetAssociationsMixin<voucher_detail, voucher_detailId>;
  addVoucher_detail!: Sequelize.HasManyAddAssociationMixin<voucher_detail, voucher_detailId>;
  addVoucher_details!: Sequelize.HasManyAddAssociationsMixin<voucher_detail, voucher_detailId>;
  createVoucher_detail!: Sequelize.HasManyCreateAssociationMixin<voucher_detail>;
  removeVoucher_detail!: Sequelize.HasManyRemoveAssociationMixin<voucher_detail, voucher_detailId>;
  removeVoucher_details!: Sequelize.HasManyRemoveAssociationsMixin<voucher_detail, voucher_detailId>;
  hasVoucher_detail!: Sequelize.HasManyHasAssociationMixin<voucher_detail, voucher_detailId>;
  hasVoucher_details!: Sequelize.HasManyHasAssociationsMixin<voucher_detail, voucher_detailId>;
  countVoucher_details!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof product {
    return product.init({
    code: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    itemtype: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      references: {
        model: 'itemtype',
        key: 'code'
      }
    },
    itemcat: {
      type: DataTypes.STRING(10),
      allowNull: true,
      references: {
        model: 'itemcat',
        key: 'code'
      }
    },
    rate: {
      type: DataTypes.DECIMAL(14,4),
      allowNull: true
    },
    itemunit: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    subitemcat: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      references: {
        model: 'itemsubcatlist',
        key: 'code'
      }
    },
    brand: {
      type: DataTypes.CHAR(10),
      allowNull: true,
      references: {
        model: 'itembrandlist',
        key: 'code'
      }
    },
    prate: {
      type: DataTypes.DECIMAL(14,4),
      allowNull: true
    },
    origin: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    pcspctn: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    },
    schmper: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    xschmper: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    bonuspcs: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    },
    article: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    metrounit: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    pkcgtype: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    weight: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    measurment: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    barcode: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    minqty: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    density: {
      type: DataTypes.DECIMAL(8,4),
      allowNull: true
    },
    Scrap: {
      type: DataTypes.DECIMAL(8,3),
      allowNull: true
    },
    filename: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    no_of_files: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    batch_id: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    round_in_matreq: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    old_code: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    item_disabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'product',
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
      {
        name: "IX_product",
        using: "BTREE",
        fields: [
          { name: "article" },
        ]
      },
      {
        name: "IX_product_1",
        using: "BTREE",
        fields: [
          { name: "barcode" },
        ]
      },
      {
        name: "IX_product_2",
        using: "BTREE",
        fields: [
          { name: "batch_id" },
        ]
      },
      {
        name: "IX_product_3",
        using: "BTREE",
        fields: [
          { name: "brand" },
        ]
      },
      {
        name: "IX_product_4",
        using: "BTREE",
        fields: [
          { name: "itemcat" },
        ]
      },
      {
        name: "IX_product_5",
        using: "BTREE",
        fields: [
          { name: "filename" },
        ]
      },
      {
        name: "IX_product_6",
        using: "BTREE",
        fields: [
          { name: "itemtype" },
        ]
      },
      {
        name: "IX_product_7",
        using: "BTREE",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "IX_product_8",
        using: "BTREE",
        fields: [
          { name: "subitemcat" },
        ]
      },
    ]
  });
  }
}
