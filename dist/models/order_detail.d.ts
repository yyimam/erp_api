import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
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
export declare type order_detailPk = "idno";
export declare type order_detailId = order_detail[order_detailPk];
export declare type order_detailOptionalAttributes = "estatus" | "itemcode" | "description" | "itemunit" | "amount" | "sed" | "sedamount" | "gst" | "gstamount" | "netamount" | "pcspctn" | "loose_qty" | "qty_in_pcs" | "bonuspcs" | "itemdiscount" | "itemdiscount_P" | "schmper" | "schmamt" | "xschmper" | "xschmamt" | "qty" | "rate" | "delivery_date" | "MRP" | "promotion_sales" | "particular";
export declare type order_detailCreationAttributes = Optional<order_detailAttributes, order_detailOptionalAttributes>;
export declare class order_detail extends Model<order_detailAttributes, order_detailCreationAttributes> implements order_detailAttributes {
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
    pidno_order_master: order_master;
    getPidno_order_master: Sequelize.BelongsToGetAssociationMixin<order_master>;
    setPidno_order_master: Sequelize.BelongsToSetAssociationMixin<order_master, order_masterId>;
    createPidno_order_master: Sequelize.BelongsToCreateAssociationMixin<order_master>;
    itemcode_product: product;
    getItemcode_product: Sequelize.BelongsToGetAssociationMixin<product>;
    setItemcode_product: Sequelize.BelongsToSetAssociationMixin<product, productId>;
    createItemcode_product: Sequelize.BelongsToCreateAssociationMixin<product>;
    static initModel(sequelize: Sequelize.Sequelize): typeof order_detail;
}
