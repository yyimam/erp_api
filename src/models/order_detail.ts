import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { order_master, order_masterId } from './order_master';
import type { product, productId } from './product';

export interface order_detailAttributes {
  idno: number;
  pidno: number;
  estatus?: string;
  itemcode?: string;
  description?: string;
  itemunit?: string;
  amount?: number;
  sed?: number;
  sedamount?: number;
  gst?: number;
  gstamount?: number;
  netamount?: number;
  pcspctn?: number;
  loose_qty?: number;
  qty_in_pcs?: number;
  bonuspcs?: number;
  itemdiscount?: number;
  itemdiscount_P?: number;
  schmper?: number;
  schmamt?: number;
  xschmper?: number;
  xschmamt?: number;
  qty?: number;
  rate?: number;
  delivery_date?: Date;
  MRP?: number;
  promotion_sales?: number;
  particular?: string;
}

export type order_detailPk = "idno";
export type order_detailId = order_detail[order_detailPk];
export type order_detailOptionalAttributes = "estatus" | "itemcode" | "description" | "itemunit" | "amount" | "sed" | "sedamount" | "gst" | "gstamount" | "netamount" | "pcspctn" | "loose_qty" | "qty_in_pcs" | "bonuspcs" | "itemdiscount" | "itemdiscount_P" | "schmper" | "schmamt" | "xschmper" | "xschmamt" | "qty" | "rate" | "delivery_date" | "MRP" | "promotion_sales" | "particular";
export type order_detailCreationAttributes = Optional<order_detailAttributes, order_detailOptionalAttributes>;

export class order_detail extends Model<order_detailAttributes, order_detailCreationAttributes> implements order_detailAttributes {
  idno!: number;
  pidno!: number;
  estatus?: string;
  itemcode?: string;
  description?: string;
  itemunit?: string;
  amount?: number;
  sed?: number;
  sedamount?: number;
  gst?: number;
  gstamount?: number;
  netamount?: number;
  pcspctn?: number;
  loose_qty?: number;
  qty_in_pcs?: number;
  bonuspcs?: number;
  itemdiscount?: number;
  itemdiscount_P?: number;
  schmper?: number;
  schmamt?: number;
  xschmper?: number;
  xschmamt?: number;
  qty?: number;
  rate?: number;
  delivery_date?: Date;
  MRP?: number;
  promotion_sales?: number;
  particular?: string;

  // order_detail belongsTo order_master via pidno
  pidno_order_master!: order_master;
  getPidno_order_master!: Sequelize.BelongsToGetAssociationMixin<order_master>;
  setPidno_order_master!: Sequelize.BelongsToSetAssociationMixin<order_master, order_masterId>;
  createPidno_order_master!: Sequelize.BelongsToCreateAssociationMixin<order_master>;
  // order_detail belongsTo product via itemcode
  itemcode_product!: product;
  getItemcode_product!: Sequelize.BelongsToGetAssociationMixin<product>;
  setItemcode_product!: Sequelize.BelongsToSetAssociationMixin<product, productId>;
  createItemcode_product!: Sequelize.BelongsToCreateAssociationMixin<product>;

  static initModel(sequelize: Sequelize.Sequelize): typeof order_detail {
    return order_detail.init({
    idno: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    pidno: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'order_master',
        key: 'idno'
      }
    },
    estatus: {
      type: DataTypes.STRING(2),
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
    description: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    itemunit: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    amount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    sed: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    sedamount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    gst: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    gstamount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    netamount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    pcspctn: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    },
    loose_qty: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    qty_in_pcs: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    bonuspcs: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    },
    itemdiscount: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    itemdiscount_P: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    schmper: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    schmamt: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    xschmper: {
      type: DataTypes.DECIMAL(10,4),
      allowNull: true
    },
    xschmamt: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    qty: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    rate: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    delivery_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MRP: {
      type: DataTypes.DECIMAL(14,4),
      allowNull: true
    },
    promotion_sales: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    particular: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'order_detail',
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
        name: "IX_Order_Detail",
        using: "BTREE",
        fields: [
          { name: "delivery_date" },
        ]
      },
      {
        name: "IX_Order_Detail_1",
        using: "BTREE",
        fields: [
          { name: "itemcode" },
        ]
      },
      {
        name: "IX_Order_Detail_2",
        using: "BTREE",
        fields: [
          { name: "pidno" },
        ]
      },
    ]
  });
  }
}
