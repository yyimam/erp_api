import * as Sequelize from 'sequelize';
import { Model, Optional } from 'sequelize';
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
export declare type price_circular_detailPk = "idno";
export declare type price_circular_detailId = price_circular_detail[price_circular_detailPk];
export declare type price_circular_detailOptionalAttributes = "itemcode" | "rate" | "schmper" | "bonuspcs" | "MRP";
export declare type price_circular_detailCreationAttributes = Optional<price_circular_detailAttributes, price_circular_detailOptionalAttributes>;
export declare class price_circular_detail extends Model<price_circular_detailAttributes, price_circular_detailCreationAttributes> implements price_circular_detailAttributes {
    idno: number;
    pidno: number;
    itemcode?: string;
    rate?: number;
    schmper?: number;
    bonuspcs?: number;
    MRP?: number;
    pidno_price_circular_master: price_circular_master;
    getPidno_price_circular_master: Sequelize.BelongsToGetAssociationMixin<price_circular_master>;
    setPidno_price_circular_master: Sequelize.BelongsToSetAssociationMixin<price_circular_master, price_circular_masterId>;
    createPidno_price_circular_master: Sequelize.BelongsToCreateAssociationMixin<price_circular_master>;
    itemcode_product: product;
    getItemcode_product: Sequelize.BelongsToGetAssociationMixin<product>;
    setItemcode_product: Sequelize.BelongsToSetAssociationMixin<product, productId>;
    createItemcode_product: Sequelize.BelongsToCreateAssociationMixin<product>;
    static initModel(sequelize: Sequelize.Sequelize): typeof price_circular_detail;
}
